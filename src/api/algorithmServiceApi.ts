//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.0.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import axios, { AxiosError } from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

export class algorithmServiceApi {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {

        this.instance = instance ? instance : axios.create();

        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";

    }

    /**
     * @param body (optional) 
     * @return Success
     */
    quickSort(body: number[] | undefined , cancelToken?: CancelToken | undefined): Promise<QuickSortData[][]> {
        let url_ = this.baseUrl + "/api/Algorithms/QuickSort";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processQuickSort(_response);
        });
    }

    protected processQuickSort(response: AxiosResponse): Promise<QuickSortData[][]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(item);
            }
            else {
                result200 = <any>null;
            }
            return Promise.resolve<QuickSortData[][]>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<QuickSortData[][]>(null as any);
    }

    /**
     * @param n (optional) 
     * @param body (optional) 
     * @return Success
     */
    dynamicPlanningFromTopToBottom(n: number | undefined, body: number[] | undefined , cancelToken?: CancelToken | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Algorithms/DynamicPlanningFromTopToBottom?";
        if (n === null)
            throw new Error("The parameter 'n' cannot be null.");
        else if (n !== undefined)
            url_ += "n=" + encodeURIComponent("" + n) + "&";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processDynamicPlanningFromTopToBottom(_response);
        });
    }

    protected processDynamicPlanningFromTopToBottom(response: AxiosResponse): Promise<number> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return Promise.resolve<number>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<number>(null as any);
    }

    /**
     * @param n (optional) 
     * @param body (optional) 
     * @return Success
     */
    dynamicPlanningFromBottomToTop(n: number | undefined, body: number[] | undefined , cancelToken?: CancelToken | undefined): Promise<number> {
        let url_ = this.baseUrl + "/api/Algorithms/DynamicPlanningFromBottomToTop?";
        if (n === null)
            throw new Error("The parameter 'n' cannot be null.");
        else if (n !== undefined)
            url_ += "n=" + encodeURIComponent("" + n) + "&";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processDynamicPlanningFromBottomToTop(_response);
        });
    }

    protected processDynamicPlanningFromBottomToTop(response: AxiosResponse): Promise<number> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return Promise.resolve<number>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<number>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    createRedBlackTree(body: number[] | undefined , cancelToken?: CancelToken | undefined): Promise<RedBlackTreeModel> {
        let url_ = this.baseUrl + "/api/Algorithms/CreateRedBlackTree";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processCreateRedBlackTree(_response);
        });
    }

    protected processCreateRedBlackTree(response: AxiosResponse): Promise<RedBlackTreeModel> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = RedBlackTreeModel.fromJS(resultData200);
            return Promise.resolve<RedBlackTreeModel>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<RedBlackTreeModel>(null as any);
    }
}

export class Link implements ILink {
    source?: number;
    target?: number;

    constructor(data?: ILink) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.source = _data["source"];
            this.target = _data["target"];
        }
    }

    static fromJS(data: any): Link {
        data = typeof data === 'object' ? data : {};
        let result = new Link();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["source"] = this.source;
        data["target"] = this.target;
        return data;
    }
}

export interface ILink {
    source?: number;
    target?: number;
}

export class Node implements INode {
    id?: number;
    name?: string | undefined;
    value?: number;
    symbolSize?: number;
    x?: number;
    y?: number;
    category?: number;

    constructor(data?: INode) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.value = _data["value"];
            this.symbolSize = _data["symbolSize"];
            this.x = _data["x"];
            this.y = _data["y"];
            this.category = _data["category"];
        }
    }

    static fromJS(data: any): Node {
        data = typeof data === 'object' ? data : {};
        let result = new Node();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["value"] = this.value;
        data["symbolSize"] = this.symbolSize;
        data["x"] = this.x;
        data["y"] = this.y;
        data["category"] = this.category;
        return data;
    }
}

export interface INode {
    id?: number;
    name?: string | undefined;
    value?: number;
    symbolSize?: number;
    x?: number;
    y?: number;
    category?: number;
}

export class QuickSortData implements IQuickSortData {
    change?: boolean;
    value?: number;

    constructor(data?: IQuickSortData) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.change = _data["change"];
            this.value = _data["value"];
        }
    }

    static fromJS(data: any): QuickSortData {
        data = typeof data === 'object' ? data : {};
        let result = new QuickSortData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["change"] = this.change;
        data["value"] = this.value;
        return data;
    }
}

export interface IQuickSortData {
    change?: boolean;
    value?: number;
}

export class RedBlackTreeModel implements IRedBlackTreeModel {
    nodes?: Node[] | undefined;
    links?: Link[] | undefined;

    constructor(data?: IRedBlackTreeModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["nodes"])) {
                this.nodes = [] as any;
                for (let item of _data["nodes"])
                    this.nodes!.push(Node.fromJS(item));
            }
            if (Array.isArray(_data["links"])) {
                this.links = [] as any;
                for (let item of _data["links"])
                    this.links!.push(Link.fromJS(item));
            }
        }
    }

    static fromJS(data: any): RedBlackTreeModel {
        data = typeof data === 'object' ? data : {};
        let result = new RedBlackTreeModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.nodes)) {
            data["nodes"] = [];
            for (let item of this.nodes)
                data["nodes"].push(item.toJSON());
        }
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links)
                data["links"].push(item.toJSON());
        }
        return data;
    }
}

export interface IRedBlackTreeModel {
    nodes?: Node[] | undefined;
    links?: Link[] | undefined;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

function isAxiosError(obj: any | undefined): obj is AxiosError {
    return obj && obj.isAxiosError === true;
}