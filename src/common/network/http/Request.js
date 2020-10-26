import axios from 'axios';
import common from './Common';
import message from 'antd/lib/message';

axios.interceptors.request.use(
    (config) =>
        // console.log("before request: success", config);
        config,
    (error) =>
        // console.log("before request: not success");
        Promise.reject(error),
);

// Add a response interceptor
axios.interceptors.response.use(
    (response) =>
        // Do something with response data
        // console.log("response: success");
        response,
    (error) =>
        // Do something with response error
        // console.log("response: not success");
        Promise.reject(error),
);

class Request {
    constructor() {
        //Init cancelToken. Note: Must create cancel token for each request
        this.cancelToken = axios.CancelToken;
        this.source = this.cancelToken.source();
    }

    get(
        url,
        params,
        loadingMessage = '',
        successMessage = '',
        errorMessage = '',
    ) {
        const key = 'get-data';
        const { urlProcess, allParams } = common.getURL(url, params);
        message.loading({ content: loadingMessage, duration: 0, key });

        return axios
            .get(urlProcess, {
                params: allParams,
            })
            .then((response) => {
                message.success({ content: successMessage, key });
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                message.error({ content: errorMessage, key });
            });
    }

    post(
        url,
        params,
        config,
        showProgress = true,
        loadingMessage = '',
        successMessage = '',
        errorMessage = '',
    ) {
        const { urlProcess, allParams } = common.getURL(url, params);
        const formPost = common.createFrom(allParams);
        message.loading(loadingMessage, 0);
        console.log('formPost', formPost)
        return axios
            .post(urlProcess, formPost, config)
            .then((response) => {
                console.log(response)
                const ret = response.data;
                message.success(successMessage);
                return ret;
            })
            .catch((error) => {
                console.log('error', error)
                message.error(errorMessage);
            });
    }

    //Cancel request by token request
    actionCancel() {
        this.source.cancel('Operation canceled by the user.');
    }
}

export default new Request();