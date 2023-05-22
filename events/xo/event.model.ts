/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Copyright 2023 Xyna GmbH, Germany
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 */
import { XoObjectClass, XoArrayClass, XoObject, XoArray, XoProperty, XoTransient, XoXPRCRuntimeContext } from '@zeta/api';


export interface XMOMLocated {
    $fqn: string;
    $rtc: XoXPRCRuntimeContext;
}


@XoObjectClass(null, 'xmcp.yggdrasil', 'Event')
export class XoEvent extends XoObject {

    @XoProperty()
    creator: string;

    @XoProperty()
    @XoTransient()
    ignoreSelfInvoked = false;
}

@XoArrayClass(XoEvent)
export class XoEventArray extends XoArray<XoEvent> {
}
