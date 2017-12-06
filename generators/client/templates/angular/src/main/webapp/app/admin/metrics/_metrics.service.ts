<%#
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see http://www.jhipster.tech/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-%>
import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
<%_ if (authenticationType !== 'uaa') { _%>
import { SERVER_API_URL } from '../../app.constants';
<%_ } _%>

@Injectable()
export class <%=jhiPrefixCapitalized%>MetricsService {

    constructor(private http: Http) {}

    getMetrics(): Observable<any> {
        return this.http.get(<%- apiServerUrlPrefix %>management/metrics').map((res: Response) => res.json());
    }

    threadDump(): Observable<any> {
        return this.http.get(<%- apiServerUrlPrefix %>management/dump').map((res: Response) => res.json());
    }
}
