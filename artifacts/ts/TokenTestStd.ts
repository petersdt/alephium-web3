/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  Asset,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
  Narrow,
} from "@alephium/web3";
import { default as TokenTestStdContractJson } from "../token/TokenTestStd.ral.json";
import { getContractByCodeHash, registerContract } from "./contracts";
import {
  AddStruct1,
  AddStruct2,
  Balances,
  MapValue,
  TokenBalance,
  AllStructs,
} from "./types";

// Custom types for the contract
export namespace TokenTestStdTypes {
  export type Fields = {
    symbol: HexString;
    name: HexString;
    decimals: bigint;
    totalSupply: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getSymbol: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getName: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getDecimals: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getTotalSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    newMethod: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<null>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
  export type MulticallReturnType<Callss extends MultiCallParams[]> = {
    [index in keyof Callss]: MultiCallResults<Callss[index]>;
  };

  export interface SignExecuteMethodTable {
    getSymbol: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getName: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getDecimals: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getTotalSupply: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    newMethod: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  TokenTestStdInstance,
  TokenTestStdTypes.Fields
> {
  encodeFields(fields: TokenTestStdTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  at(address: string): TokenTestStdInstance {
    return new TokenTestStdInstance(address);
  }

  tests = {
    getSymbol: async (
      params: Omit<
        TestContractParamsWithoutMaps<TokenTestStdTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getSymbol", params, getContractByCodeHash);
    },
    getName: async (
      params: Omit<
        TestContractParamsWithoutMaps<TokenTestStdTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getName", params, getContractByCodeHash);
    },
    getDecimals: async (
      params: Omit<
        TestContractParamsWithoutMaps<TokenTestStdTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getDecimals", params, getContractByCodeHash);
    },
    getTotalSupply: async (
      params: Omit<
        TestContractParamsWithoutMaps<TokenTestStdTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getTotalSupply", params, getContractByCodeHash);
    },
    newMethod: async (
      params: Omit<
        TestContractParamsWithoutMaps<TokenTestStdTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "newMethod", params, getContractByCodeHash);
    },
  };

  stateForTest(
    initFields: TokenTestStdTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const TokenTestStd = new Factory(
  Contract.fromJson(
    TokenTestStdContractJson,
    "",
    "4aa5c769148cada8eeb1cd3791f6e793ed92009ac79ebb64dc79d4d7f2969c8b",
    AllStructs
  )
);
registerContract(TokenTestStd);

// Use this class to interact with the blockchain
export class TokenTestStdInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<TokenTestStdTypes.State> {
    return fetchContractState(TokenTestStd, this);
  }

  view = {
    getSymbol: async (
      params?: TokenTestStdTypes.CallMethodParams<"getSymbol">
    ): Promise<TokenTestStdTypes.CallMethodResult<"getSymbol">> => {
      return callMethod(
        TokenTestStd,
        this,
        "getSymbol",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getName: async (
      params?: TokenTestStdTypes.CallMethodParams<"getName">
    ): Promise<TokenTestStdTypes.CallMethodResult<"getName">> => {
      return callMethod(
        TokenTestStd,
        this,
        "getName",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getDecimals: async (
      params?: TokenTestStdTypes.CallMethodParams<"getDecimals">
    ): Promise<TokenTestStdTypes.CallMethodResult<"getDecimals">> => {
      return callMethod(
        TokenTestStd,
        this,
        "getDecimals",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getTotalSupply: async (
      params?: TokenTestStdTypes.CallMethodParams<"getTotalSupply">
    ): Promise<TokenTestStdTypes.CallMethodResult<"getTotalSupply">> => {
      return callMethod(
        TokenTestStd,
        this,
        "getTotalSupply",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    newMethod: async (
      params?: TokenTestStdTypes.CallMethodParams<"newMethod">
    ): Promise<TokenTestStdTypes.CallMethodResult<"newMethod">> => {
      return callMethod(
        TokenTestStd,
        this,
        "newMethod",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getSymbol: async (
      params: TokenTestStdTypes.SignExecuteMethodParams<"getSymbol">
    ): Promise<TokenTestStdTypes.SignExecuteMethodResult<"getSymbol">> => {
      return signExecuteMethod(TokenTestStd, this, "getSymbol", params);
    },
    getName: async (
      params: TokenTestStdTypes.SignExecuteMethodParams<"getName">
    ): Promise<TokenTestStdTypes.SignExecuteMethodResult<"getName">> => {
      return signExecuteMethod(TokenTestStd, this, "getName", params);
    },
    getDecimals: async (
      params: TokenTestStdTypes.SignExecuteMethodParams<"getDecimals">
    ): Promise<TokenTestStdTypes.SignExecuteMethodResult<"getDecimals">> => {
      return signExecuteMethod(TokenTestStd, this, "getDecimals", params);
    },
    getTotalSupply: async (
      params: TokenTestStdTypes.SignExecuteMethodParams<"getTotalSupply">
    ): Promise<TokenTestStdTypes.SignExecuteMethodResult<"getTotalSupply">> => {
      return signExecuteMethod(TokenTestStd, this, "getTotalSupply", params);
    },
    newMethod: async (
      params: TokenTestStdTypes.SignExecuteMethodParams<"newMethod">
    ): Promise<TokenTestStdTypes.SignExecuteMethodResult<"newMethod">> => {
      return signExecuteMethod(TokenTestStd, this, "newMethod", params);
    },
  };

  async multicall<Calls extends TokenTestStdTypes.MultiCallParams>(
    calls: Calls
  ): Promise<TokenTestStdTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends TokenTestStdTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<TokenTestStdTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends
      | TokenTestStdTypes.MultiCallParams
      | TokenTestStdTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(
      TokenTestStd,
      this,
      callss,
      getContractByCodeHash
    );
  }
}
