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
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as DeprecatedNFTTest7ContractJson } from "../nft/DeprecatedNFTTest7.ral.json";
import { getContractByCodeHash } from "./contracts";
import { Balances, MapValue, TokenBalance, AllStructs } from "./types";

// Custom types for the contract
export namespace DeprecatedNFTTest7Types {
  export type Fields = {
    collectionId: HexString;
    uri: HexString;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getTokenUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    returnNegativeIndex: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<[HexString, bigint]>;
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
}

class Factory extends ContractFactory<
  DeprecatedNFTTest7Instance,
  DeprecatedNFTTest7Types.Fields
> {
  encodeFields(fields: DeprecatedNFTTest7Types.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as DeprecatedNFTTest7Types.Fields;
  }

  at(address: string): DeprecatedNFTTest7Instance {
    return new DeprecatedNFTTest7Instance(address);
  }

  tests = {
    getTokenUri: async (
      params: Omit<
        TestContractParamsWithoutMaps<DeprecatedNFTTest7Types.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getTokenUri", params);
    },
    returnNegativeIndex: async (
      params: Omit<
        TestContractParamsWithoutMaps<DeprecatedNFTTest7Types.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<[HexString, bigint]>> => {
      return testMethod(this, "returnNegativeIndex", params);
    },
  };
}

// Use this object to test and deploy the contract
export const DeprecatedNFTTest7 = new Factory(
  Contract.fromJson(
    DeprecatedNFTTest7ContractJson,
    "",
    "b95c9acf088b090f5d9d34f28ab079cf22b9e53af8ae6864113c71172231ef4c",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class DeprecatedNFTTest7Instance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<DeprecatedNFTTest7Types.State> {
    return fetchContractState(DeprecatedNFTTest7, this);
  }

  methods = {
    getTokenUri: async (
      params?: DeprecatedNFTTest7Types.CallMethodParams<"getTokenUri">
    ): Promise<DeprecatedNFTTest7Types.CallMethodResult<"getTokenUri">> => {
      return callMethod(
        DeprecatedNFTTest7,
        this,
        "getTokenUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    returnNegativeIndex: async (
      params?: DeprecatedNFTTest7Types.CallMethodParams<"returnNegativeIndex">
    ): Promise<
      DeprecatedNFTTest7Types.CallMethodResult<"returnNegativeIndex">
    > => {
      return callMethod(
        DeprecatedNFTTest7,
        this,
        "returnNegativeIndex",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends DeprecatedNFTTest7Types.MultiCallParams>(
    calls: Calls
  ): Promise<DeprecatedNFTTest7Types.MultiCallResults<Calls>> {
    return (await multicallMethods(
      DeprecatedNFTTest7,
      this,
      calls,
      getContractByCodeHash
    )) as DeprecatedNFTTest7Types.MultiCallResults<Calls>;
  }
}
