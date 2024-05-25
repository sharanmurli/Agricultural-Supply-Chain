/*
 * SPDX-License-Identifier: Apache2.0
 */

'use strict';

const { Shim } = require('fabric-shim');
const { Chaincode } = require('..');

Shim.start(new Chaincode());
