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
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ConquestV2Interface extends ethers.utils.Interface {
  functions: {
    "assignOwnership(address,uint256)": FunctionFragment;
    "conquestEntryID()": FunctionFragment;
    "conquestsEntered(address)": FunctionFragment;
    "exitConquest(address,uint256,uint256[],uint256[])": FunctionFragment;
    "getOwnerTier(address)": FunctionFragment;
    "goldCardFactory()": FunctionFragment;
    "isActiveConquest(address)": FunctionFragment;
    "oldConquest()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "silverCardFactory()": FunctionFragment;
    "skyweaverAssets()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "assignOwnership",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "conquestEntryID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "conquestsEntered",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "exitConquest",
    values: [string, BigNumberish, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnerTier",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "goldCardFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isActiveConquest",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "oldConquest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "silverCardFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "skyweaverAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "assignOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "conquestEntryID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "conquestsEntered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exitConquest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "goldCardFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isActiveConquest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oldConquest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "silverCardFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "skyweaverAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "ConquestEntered(address,uint256)": EventFragment;
    "OwnershipGranted(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConquestEntered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipGranted"): EventFragment;
}

export class ConquestV2 extends Contract {
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

  interface: ConquestV2Interface;

  functions: {
    assignOwnership(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "assignOwnership(address,uint256)"(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    conquestEntryID(overrides?: CallOverrides): Promise<[BigNumber]>;

    "conquestEntryID()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    conquestsEntered(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "conquestsEntered(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    exitConquest(
      _user: string,
      _conquestNonce: BigNumberish,
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "exitConquest(address,uint256,uint256[],uint256[])"(
      _user: string,
      _conquestNonce: BigNumberish,
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getOwnerTier(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getOwnerTier(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    goldCardFactory(overrides?: CallOverrides): Promise<[string]>;

    "goldCardFactory()"(overrides?: CallOverrides): Promise<[string]>;

    isActiveConquest(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isActiveConquest(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    oldConquest(overrides?: CallOverrides): Promise<[string]>;

    "oldConquest()"(overrides?: CallOverrides): Promise<[string]>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    silverCardFactory(overrides?: CallOverrides): Promise<[string]>;

    "silverCardFactory()"(overrides?: CallOverrides): Promise<[string]>;

    skyweaverAssets(overrides?: CallOverrides): Promise<[string]>;

    "skyweaverAssets()"(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  assignOwnership(
    _address: string,
    _tier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "assignOwnership(address,uint256)"(
    _address: string,
    _tier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  conquestEntryID(overrides?: CallOverrides): Promise<BigNumber>;

  "conquestEntryID()"(overrides?: CallOverrides): Promise<BigNumber>;

  conquestsEntered(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "conquestsEntered(address)"(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  exitConquest(
    _user: string,
    _conquestNonce: BigNumberish,
    _silverIds: BigNumberish[],
    _goldIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "exitConquest(address,uint256,uint256[],uint256[])"(
    _user: string,
    _conquestNonce: BigNumberish,
    _silverIds: BigNumberish[],
    _goldIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getOwnerTier(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getOwnerTier(address)"(
    _owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  goldCardFactory(overrides?: CallOverrides): Promise<string>;

  "goldCardFactory()"(overrides?: CallOverrides): Promise<string>;

  isActiveConquest(_user: string, overrides?: CallOverrides): Promise<boolean>;

  "isActiveConquest(address)"(
    _user: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  oldConquest(overrides?: CallOverrides): Promise<string>;

  "oldConquest()"(overrides?: CallOverrides): Promise<string>;

  onERC1155BatchReceived(
    arg0: string,
    _from: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
    arg0: string,
    _from: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    _operator: string,
    _from: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "onERC1155Received(address,address,uint256,uint256,bytes)"(
    _operator: string,
    _from: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  silverCardFactory(overrides?: CallOverrides): Promise<string>;

  "silverCardFactory()"(overrides?: CallOverrides): Promise<string>;

  skyweaverAssets(overrides?: CallOverrides): Promise<string>;

  "skyweaverAssets()"(overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    assignOwnership(
      _address: string,
      _tier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "assignOwnership(address,uint256)"(
      _address: string,
      _tier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    conquestEntryID(overrides?: CallOverrides): Promise<BigNumber>;

    "conquestEntryID()"(overrides?: CallOverrides): Promise<BigNumber>;

    conquestsEntered(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "conquestsEntered(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exitConquest(
      _user: string,
      _conquestNonce: BigNumberish,
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "exitConquest(address,uint256,uint256[],uint256[])"(
      _user: string,
      _conquestNonce: BigNumberish,
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    getOwnerTier(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getOwnerTier(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    goldCardFactory(overrides?: CallOverrides): Promise<string>;

    "goldCardFactory()"(overrides?: CallOverrides): Promise<string>;

    isActiveConquest(
      _user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isActiveConquest(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    oldConquest(overrides?: CallOverrides): Promise<string>;

    "oldConquest()"(overrides?: CallOverrides): Promise<string>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    silverCardFactory(overrides?: CallOverrides): Promise<string>;

    "silverCardFactory()"(overrides?: CallOverrides): Promise<string>;

    skyweaverAssets(overrides?: CallOverrides): Promise<string>;

    "skyweaverAssets()"(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    ConquestEntered(
      user: null,
      nConquests: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; nConquests: BigNumber }
    >;

    OwnershipGranted(
      owner: string | null,
      previousTier: BigNumberish | null,
      newTier: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { owner: string; previousTier: BigNumber; newTier: BigNumber }
    >;
  };

  estimateGas: {
    assignOwnership(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "assignOwnership(address,uint256)"(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    conquestEntryID(overrides?: CallOverrides): Promise<BigNumber>;

    "conquestEntryID()"(overrides?: CallOverrides): Promise<BigNumber>;

    conquestsEntered(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "conquestsEntered(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exitConquest(
      _user: string,
      _conquestNonce: BigNumberish,
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "exitConquest(address,uint256,uint256[],uint256[])"(
      _user: string,
      _conquestNonce: BigNumberish,
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getOwnerTier(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getOwnerTier(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    goldCardFactory(overrides?: CallOverrides): Promise<BigNumber>;

    "goldCardFactory()"(overrides?: CallOverrides): Promise<BigNumber>;

    isActiveConquest(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isActiveConquest(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oldConquest(overrides?: CallOverrides): Promise<BigNumber>;

    "oldConquest()"(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    silverCardFactory(overrides?: CallOverrides): Promise<BigNumber>;

    "silverCardFactory()"(overrides?: CallOverrides): Promise<BigNumber>;

    skyweaverAssets(overrides?: CallOverrides): Promise<BigNumber>;

    "skyweaverAssets()"(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assignOwnership(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "assignOwnership(address,uint256)"(
      _address: string,
      _tier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    conquestEntryID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "conquestEntryID()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    conquestsEntered(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "conquestsEntered(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exitConquest(
      _user: string,
      _conquestNonce: BigNumberish,
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "exitConquest(address,uint256,uint256[],uint256[])"(
      _user: string,
      _conquestNonce: BigNumberish,
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getOwnerTier(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getOwnerTier(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    goldCardFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "goldCardFactory()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isActiveConquest(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isActiveConquest(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oldConquest(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "oldConquest()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    silverCardFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "silverCardFactory()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    skyweaverAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "skyweaverAssets()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
