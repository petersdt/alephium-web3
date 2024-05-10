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
import { default as MetaDataContractJson } from "../test/MetaData.ral.json";
import { getContractByCodeHash } from "./contracts";
import { Balances, MapValue, TokenBalance, AllStructs } from "./types";

// Custom types for the contract
export namespace MetaDataTypes {
  export type State = Omit<ContractState<any>, "fields">;
}

class Factory extends ContractFactory<MetaDataInstance, {}> {
  encodeFields() {
    return encodeContractFields({}, this.contract.fieldsSig, AllStructs);
  }

  at(address: string): MetaDataInstance {
    return new MetaDataInstance(address);
  }

  tests = {
    foo: async (
      params?: Omit<
        TestContractParamsWithoutMaps<never, never>,
        "testArgs" | "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "foo", params === undefined ? {} : params);
    },
    bar: async (
      params?: Omit<
        TestContractParamsWithoutMaps<never, never>,
        "testArgs" | "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "bar", params === undefined ? {} : params);
    },
    baz: async (
      params?: Omit<
        TestContractParamsWithoutMaps<never, never>,
        "testArgs" | "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "baz", params === undefined ? {} : params);
    },
  };
}

// Use this object to test and deploy the contract
export const MetaData = new Factory(
  Contract.fromJson(
    MetaDataContractJson,
    "",
    "af0b3119565ef5f833f7b3514005a6b00ac9957d5a7779765edfc6e6ce6321c5",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class MetaDataInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<MetaDataTypes.State> {
    return fetchContractState(MetaData, this);
  }
}
