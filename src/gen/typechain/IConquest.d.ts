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

interface IConquestInterface extends ethers.utils.Interface {
  functions: {
    "conquestsEntered(address)": FunctionFragment;
    "exitConquest(address,uint256[],uint256[])": FunctionFragment;
    "isActiveConquest(address)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "conquestsEntered",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "exitConquest",
    values: [string, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isActiveConquest",
    values: [string]
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
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "conquestsEntered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exitConquest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isActiveConquest",
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
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {};
}

export class IConquest extends Contract {
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

  interface: IConquestInterface;

  functions: {
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
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "exitConquest(address,uint256[],uint256[])"(
      _user: string,
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isActiveConquest(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isActiveConquest(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
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

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

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
    _silverIds: BigNumberish[],
    _goldIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "exitConquest(address,uint256[],uint256[])"(
    _user: string,
    _silverIds: BigNumberish[],
    _goldIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isActiveConquest(_user: string, overrides?: CallOverrides): Promise<boolean>;

  "isActiveConquest(address)"(
    _user: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  onERC1155BatchReceived(
    _operator: string,
    _from: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
    _operator: string,
    _from: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: BytesLike,
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

  supportsInterface(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
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
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "exitConquest(address,uint256[],uint256[])"(
      _user: string,
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    isActiveConquest(
      _user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isActiveConquest(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
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

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
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
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "exitConquest(address,uint256[],uint256[])"(
      _user: string,
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isActiveConquest(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isActiveConquest(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
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
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "exitConquest(address,uint256[],uint256[])"(
      _user: string,
      _silverIds: BigNumberish[],
      _goldIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isActiveConquest(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isActiveConquest(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
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
