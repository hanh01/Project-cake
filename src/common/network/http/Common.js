import { apiUrl } from '../../../constants/api';

class CommonURL {
    getURL(url, params, headers) {
        let localUrl = url;
        let localParams = params;
        let localHeaders = headers;
        localParams = localParams || {};
        if (!localUrl.startsWith('http') && !localUrl.startsWith('https')) {
            localUrl =
                apiUrl + (localUrl.startsWith('/') ? localUrl : `/${localUrl}`);
        }
        if (!localHeaders) {
            localHeaders = {};
        }

        const myHeaders = new Headers();
        Object.keys(localHeaders).forEach((key) => {
            myHeaders.append(key, localHeaders[key]);
        });
        return {
            urlProcess: localUrl,
            allParams: localParams,
            headersData: myHeaders,
        };
    }

    createFrom(params, form) {
        let localForm = form;
        if (!localForm) {
            localForm = new FormData();
        }
        if (!params) {
            return localForm;
        }
        Object.keys(params).forEach((key) => {
            this.simplifyParams(localForm, key, params[key]);
        });
        return localForm;
    }

    simplifyParams(form, key, param) {
        // console.log(key, param);
        if (typeof param === 'undefined' || param === null) return;

        // console.log('param: ', param, typeof param);
        if (typeof param !== 'object' || param instanceof File) {
            form.append(key, param);
            // console.log('appending', key, param);
            return;
        }

        if (Array.isArray(param)) {
            param.forEach((value, i) => {
                this.simplifyParams(form, `${key}[${i}]`, value);
            });
        } else {
            Object.keys(param).forEach((subKey) => {
                this.simplifyParams(form, `${key}[${subKey}]`, param[subKey]);
            });
        }
    }
}

export default new CommonURL();