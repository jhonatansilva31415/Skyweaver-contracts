/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ERC1155MetadataInterface extends ethers.utils.Interface {
  functions: {
    "supportsInterface(bytes4)": FunctionFragment;
    "uri(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;

  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;

  events: {
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export class ERC1155Metadata extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ERC1155MetadataInterface;

  functions: {
    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    uri(_id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "uri(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  supportsInterface(
    _interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    _interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  uri(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "uri(uint256)"(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    uri(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "uri(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    URI(
      _uri: null,
      _id: BigNumberish | null
    ): TypedEventFilter<[string, BigNumber], { _uri: string; _id: BigNumber }>;
  };

  estimateGas: {
    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uri(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "uri(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uri(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "uri(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
