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

export class apiClient {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {

        this.instance = instance ? instance : axios.create();

        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";

    }

    /**
     * @return Success
     */
    anonymous(  cancelToken?: CancelToken | undefined): Promise<string> {
        let url_ = this.baseUrl + "/";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
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
            return this.processAnonymous(_response);
        });
    }

    protected processAnonymous(response: AxiosResponse): Promise<string> {
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
    
            return Promise.resolve<string>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<string>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    addTest(body: Test | undefined , cancelToken?: CancelToken | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/api/Test/AddTest";
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
            return this.processAddTest(_response);
        });
    }

    protected processAddTest(response: AxiosResponse): Promise<boolean> {
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
    
            return Promise.resolve<boolean>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<boolean>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    updateTest(body: Test | undefined , cancelToken?: CancelToken | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/api/Test/UpdateTest";
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
            return this.processUpdateTest(_response);
        });
    }

    protected processUpdateTest(response: AxiosResponse): Promise<boolean> {
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
    
            return Promise.resolve<boolean>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<boolean>(null as any);
    }

    /**
     * @param id (optional) 
     * @return Success
     */
    deleteTest(id: number | undefined , cancelToken?: CancelToken | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/api/Test/DeleteTest?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "POST",
            url: url_,
            headers: {
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
            return this.processDeleteTest(_response);
        });
    }

    protected processDeleteTest(response: AxiosResponse): Promise<boolean> {
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
    
            return Promise.resolve<boolean>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<boolean>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    getTestList(body: SeachModel | undefined , cancelToken?: CancelToken | undefined): Promise<TestDataSource> {
        let url_ = this.baseUrl + "/api/Test/GetTestList";
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
            return this.processGetTestList(_response);
        });
    }

    protected processGetTestList(response: AxiosResponse): Promise<TestDataSource> {
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
            result200 = TestDataSource.fromJS(resultData200);
            return Promise.resolve<TestDataSource>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<TestDataSource>(null as any);
    }

    /**
     * @param id (optional) 
     * @return Success
     */
    findTest(id: number | undefined , cancelToken?: CancelToken | undefined): Promise<Test> {
        let url_ = this.baseUrl + "/api/Test/FindTest?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
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
            return this.processFindTest(_response);
        });
    }

    protected processFindTest(response: AxiosResponse): Promise<Test> {
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
            result200 = Test.fromJS(resultData200);
            return Promise.resolve<Test>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<Test>(null as any);
    }
}

export class SeachModel implements ISeachModel {
    skip?: number;
    size?: number;
    keyword?: string | undefined;

    constructor(data?: ISeachModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.skip = _data["skip"];
            this.size = _data["size"];
            this.keyword = _data["keyword"];
        }
    }

    static fromJS(data: any): SeachModel {
        data = typeof data === 'object' ? data : {};
        let result = new SeachModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["skip"] = this.skip;
        data["size"] = this.size;
        data["keyword"] = this.keyword;
        return data;
    }
}

export interface ISeachModel {
    skip?: number;
    size?: number;
    keyword?: string | undefined;
}

export class Test implements ITest {
    id?: number;
    createdOn?: Date | undefined;
    lastModifyOn?: Date | undefined;
    isDeleted?: boolean;
    name?: string | undefined;
    age?: number;
    address?: string | undefined;
    country?: string | undefined;

    constructor(data?: ITest) {
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
            this.createdOn = _data["createdOn"] ? new Date(_data["createdOn"].toString()) : <any>undefined;
            this.lastModifyOn = _data["lastModifyOn"] ? new Date(_data["lastModifyOn"].toString()) : <any>undefined;
            this.isDeleted = _data["isDeleted"];
            this.name = _data["name"];
            this.age = _data["age"];
            this.address = _data["address"];
            this.country = _data["country"];
        }
    }

    static fromJS(data: any): Test {
        data = typeof data === 'object' ? data : {};
        let result = new Test();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["createdOn"] = this.createdOn ? this.createdOn.toISOString() : <any>undefined;
        data["lastModifyOn"] = this.lastModifyOn ? this.lastModifyOn.toISOString() : <any>undefined;
        data["isDeleted"] = this.isDeleted;
        data["name"] = this.name;
        data["age"] = this.age;
        data["address"] = this.address;
        data["country"] = this.country;
        return data;
    }
}

export interface ITest {
    id?: number;
    createdOn?: Date | undefined;
    lastModifyOn?: Date | undefined;
    isDeleted?: boolean;
    name?: string | undefined;
    age?: number;
    address?: string | undefined;
    country?: string | undefined;
}

export class TestDataSource implements ITestDataSource {
    data?: Test[] | undefined;
    count?: number;

    constructor(data?: ITestDataSource) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["data"])) {
                this.data = [] as any;
                for (let item of _data["data"])
                    this.data!.push(Test.fromJS(item));
            }
            this.count = _data["count"];
        }
    }

    static fromJS(data: any): TestDataSource {
        data = typeof data === 'object' ? data : {};
        let result = new TestDataSource();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.data)) {
            data["data"] = [];
            for (let item of this.data)
                data["data"].push(item.toJSON());
        }
        data["count"] = this.count;
        return data;
    }
}

export interface ITestDataSource {
    data?: Test[] | undefined;
    count?: number;
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