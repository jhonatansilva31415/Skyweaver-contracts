/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ConquestV3 } from "../ConquestV3";

export class ConquestV3__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _firstOwner: string,
    _oldConquest: string,
    _skyweaverAssetsAddress: string,
    _silverCardFactoryAddress: string,
    _goldCardFactoryAddress: string,
    _conquestEntryTokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConquestV3> {
    return super.deploy(
      _firstOwner,
      _oldConquest,
      _skyweaverAssetsAddress,
      _silverCardFactoryAddress,
      _goldCardFactoryAddress,
      _conquestEntryTokenId,
      overrides || {}
    ) as Promise<ConquestV3>;
  }
  getDeployTransaction(
    _firstOwner: string,
    _oldConquest: string,
    _skyweaverAssetsAddress: string,
    _silverCardFactoryAddress: string,
    _goldCardFactoryAddress: string,
    _conquestEntryTokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _firstOwner,
      _oldConquest,
      _skyweaverAssetsAddress,
      _silverCardFactoryAddress,
      _goldCardFactoryAddress,
      _conquestEntryTokenId,
      overrides || {}
    );
  }
  attach(address: string): ConquestV3 {
    return super.attach(address) as ConquestV3;
  }
  connect(signer: Signer): ConquestV3__factory {
    return super.connect(signer) as ConquestV3__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConquestV3 {
    return new Contract(address, _abi, signerOrProvider) as ConquestV3;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_firstOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_oldConquest",
        type: "address",
      },
      {
        internalType: "address",
        name: "_skyweaverAssetsAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_silverCardFactoryAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_goldCardFactoryAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_conquestEntryTokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nConquests",
        type: "uint256",
      },
    ],
    name: "ConquestEntered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "previousTier",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newTier",
        type: "uint256",
      },
    ],
    name: "OwnershipGranted",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tier",
        type: "uint256",
      },
    ],
    name: "assignOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "conquestEntryID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "conquestsEntered",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_conquestNonce",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_silverIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_goldIds",
        type: "uint256[]",
      },
    ],
    name: "exitConquest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getOwnerTier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "goldCardFactory",
    outputs: [
      {
        internalType: "contract IRewardFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "isActiveConquest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_conquestNonce",
        type: "uint256",
      },
    ],
    name: "mintGold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "oldConquest",
    outputs: [
      {
        internalType: "contract IConquest",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_conquestNonce",
        type: "uint256",
      },
    ],
    name: "pendingEntered",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "silverCardFactory",
    outputs: [
      {
        internalType: "contract IRewardFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "skyweaverAssets",
    outputs: [
      {
        internalType: "contract ISkyweaverAssets",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b50604051620024e3380380620024e3833981810160405260c08110156200003857600080fd5b508051602082015160408301516060840151608085015160a09095015193949293919290918573ffffffffffffffffffffffffffffffffffffffff8116620000cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018062002490602e913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166000818152602081905260408082207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9081905590519092907fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e908390a45073ffffffffffffffffffffffffffffffffffffffff8616158015906200017d575073ffffffffffffffffffffffffffffffffffffffff851615155b80156200019f575073ffffffffffffffffffffffffffffffffffffffff841615155b8015620001c1575073ffffffffffffffffffffffffffffffffffffffff831615155b8015620001e3575073ffffffffffffffffffffffffffffffffffffffff821615155b6200023a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180620024be6025913960400191505060405180910390fd5b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606095861b811660805293851b841660e05291841b831660a05290921b1660c052610100525060805160601c60a05160601c60c05160601c60e05160601c6101005161217d62000313600039806107a8528061163e528061186b525080610a045280611512528061189a5250806107845280611bd05250806108015280610f3452806110a45280611104525080610a525280610bd15280610ce8528061131d528061143452806119aa5280611a60525061217d6000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063a0cf655811610097578063e8818d3311610066578063e8818d33146105d1578063e8f35d5a146105d9578063edf52d131461060c578063f23a6e6114610645576100f5565b8063a0cf65581461027e578063b8df5e00146102b1578063bc197c8114610395578063bc7cce601461059e576100f5565b8063288c18b0116100d3578063288c18b0146101fa5780633647c84d146102335780635d511a111461023b57806384f4076e14610276576100f5565b806301ffc9a71461015c578063094227d4146101af57806317119df5146101e0575b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f436f6e71756573745633235f3a20554e535550504f525445445f4d4554484f44604482015290519081900360640190fd5b61019b6004803603602081101561017257600080fd5b50357fffffffff00000000000000000000000000000000000000000000000000000000166106e7565b604080519115158252519081900360200190f35b6101b7610782565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101e86107a6565b60408051918252519081900360200190f35b6101e86004803603604081101561021057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107ca565b6101b76107ff565b6102746004803603604081101561025157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610823565b005b6101b7610a02565b6101e86004803603602081101561029457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a26565b610274600480360360808110156102c757600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561030457600080fd5b82018360208201111561031657600080fd5b8035906020019184602083028401116401000000008311171561033857600080fd5b91939092909160208101903564010000000081111561035657600080fd5b82018360208201111561036857600080fd5b8035906020019184602083028401116401000000008311171561038a57600080fd5b509092509050610b36565b610569600480360360a08110156103ab57600080fd5b73ffffffffffffffffffffffffffffffffffffffff82358116926020810135909116918101906060810160408201356401000000008111156103ec57600080fd5b8201836020820111156103fe57600080fd5b8035906020019184602083028401116401000000008311171561042057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561047057600080fd5b82018360208201111561048257600080fd5b803590602001918460208302840111640100000000831117156104a457600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156104f457600080fd5b82018360208201111561050657600080fd5b8035906020019184600183028401116401000000008311171561052857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506112ed945050505050565b604080517fffffffff000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b61019b600480360360208110156105b457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661197e565b6101b7611a5e565b6101e8600480360360208110156105ef57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611a82565b6102746004803603604081101561062257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135611aaa565b610569600480360360a081101561065b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a0810160808201356401000000008111156106a857600080fd5b8201836020820111156106ba57600080fd5b803590602001918460018302840111640100000000831117156106dc57600080fd5b509092509050611d0b565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000148061077a57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b90505b919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b73ffffffffffffffffffffffffffffffffffffffff919091166000908152600360209081526040808320938352929052205490565b7f000000000000000000000000000000000000000000000000000000000000000081565b336000908152602081905260409020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff908111156108ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806120356032913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316610919576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611f1a602e913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff84161415610988576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806121176031913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316600081815260208190526040808220549051859391927fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e91a45073ffffffffffffffffffffffffffffffffffffffff909116600090815260208190526040902055565b7f000000000000000000000000000000000000000000000000000000000000000081565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260026020526040812054610b0a577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a0cf6558836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610ad757600080fd5b505afa158015610aeb573d6000803e3d6000fd5b505050506040513d6020811015610b0157600080fd5b5051905061077d565b5073ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604090205461077d565b33600090815260208190526040902054600190811115610ba1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806120356032913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff87166000908152600260205260409020548790610dae5760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a0cf6558836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610c5657600080fd5b505afa158015610c6a573d6000803e3d6000fd5b505050506040513d6020811015610c8057600080fd5b505190508015610dac5773ffffffffffffffffffffffffffffffffffffffff80831660008181526002602090815260409182902085905581517fbc7cce60000000000000000000000000000000000000000000000000000000008152600481019390935290517f00000000000000000000000000000000000000000000000000000000000000009093169263bc7cce60926024808201939291829003018186803b158015610d2d57600080fd5b505afa158015610d41573d6000803e3d6000fd5b505050506040513d6020811015610d5757600080fd5b505173ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790555b505b73ffffffffffffffffffffffffffffffffffffffff881660009081526001602052604090205460ff16610e2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611f746030913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff88166000908152600260205260409020548714610ea9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806120bc602f913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8816600090815260016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905584158015610f00575082155b15610f0a576112e3565b600185148015610f18575082155b1561107a5773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663b48ab8b6898888610f6860016064611dfa565b6040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018060200184810384528787828181526020019250602002808284376000838201819052601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018681038552875181528751602091820193828a0193509102908190849084905b8381101561102457818101518382015260200161100c565b50505050905001848103825260008152602001602001975050505050505050600060405180830381600087803b15801561105d57600080fd5b505af1158015611071573d6000803e3d6000fd5b505050506112e3565b600285148015611088575082155b156110d85773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663b48ab8b6898888610f6860026064611dfa565b6001851480156110e85750600183145b156112925773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663b48ab8b689888861113860016064611dfa565b6040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018060200184810384528787828181526020019250602002808284376000838201819052601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018681038552875181528751602091820193828a0193509102908190849084905b838110156111f45781810151838201526020016111dc565b50505050905001848103825260008152602001602001975050505050505050600060405180830381600087803b15801561122d57600080fd5b505af1158015611241573d6000803e3d6000fd5b505050508383600081811061125257fe5b73ffffffffffffffffffffffffffffffffffffffff8b1660009081526003602090815260408083208d8452825290912091029290920135909155506112e3565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806120676028913960400191505060405180910390fd5b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841660009081526002602052604081205485906114fa5760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a0cf6558836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156113a257600080fd5b505afa1580156113b6573d6000803e3d6000fd5b505050506040513d60208110156113cc57600080fd5b5051905080156114f85773ffffffffffffffffffffffffffffffffffffffff80831660008181526002602090815260409182902085905581517fbc7cce60000000000000000000000000000000000000000000000000000000008152600481019390935290517f00000000000000000000000000000000000000000000000000000000000000009093169263bc7cce60926024808201939291829003018186803b15801561147957600080fd5b505afa15801561148d573d6000803e3d6000fd5b505050506040513d60208110156114a357600080fd5b505173ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790555b505b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611588576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d81526020018061208f602d913960400191505060405180910390fd5b84516001146115e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611ef0602a913960400191505060405180910390fd5b835160011461163c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611fa4602e913960400191505060405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000008560008151811061166a57fe5b6020026020010151146116c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061200d6028913960400191505060405180910390fd5b6002600a0a846000815181106116da57fe5b602002602001015114611738576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806120eb602c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff861660009081526001602052604090205460ff16156117b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611f48602c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8616600090815260016020818152604080842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168417905560029091529091205461181991611e74565b73ffffffffffffffffffffffffffffffffffffffff8088166000908152600260205260408082209390935582517fb390c0ab0000000000000000000000000000000000000000000000000000000081527f000000000000000000000000000000000000000000000000000000000000000060048201526064602482015292517f00000000000000000000000000000000000000000000000000000000000000009092169263b390c0ab926044808301939282900301818387803b1580156118df57600080fd5b505af11580156118f3573d6000803e3d6000fd5b5050505073ffffffffffffffffffffffffffffffffffffffff861660008181526002602090815260409182902054825190815291517fcfc6e20f951fff57781db2894b809461f33221319f91c415940263667ae9a6e79281900390910190a2507fbc197c81000000000000000000000000000000000000000000000000000000009695505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260026020526040812054611a2f577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bc7cce60836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610ad757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205460ff1661077d565b7f000000000000000000000000000000000000000000000000000000000000000081565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b33600090815260208190526040902054600190811115611b15576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806120356032913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316600090815260036020908152604080832085845290915290205480611b9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b815260200180611fd2603b913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff80851660009081526003602090815260408083208784529091528120557f00000000000000000000000000000000000000000000000000000000000000001663b48ab8b685611c01600185611dfa565b611c0d60016064611dfa565b6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845286818151815260200191508051906020019060200280838360005b83811015611c80578181015183820152602001611c68565b50505050905001848103835285818151815260200191508051906020019060200280838360005b83811015611cbf578181015183820152602001611ca7565b505050509050018481038252600081526020016020019650505050505050600060405180830381600087803b158015611cf757600080fd5b505af11580156112e3573d6000803e3d6000fd5b604080516001808252818301909252600091606091906020808301908036833750506040805160018082528183019092529293506060929150602080830190803683370190505090508682600081518110611d6257fe5b6020026020010181815250508581600081518110611d7c57fe5b602002602001018181525050611dcb8989848489898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506112ed92505050565b507ff23a6e61000000000000000000000000000000000000000000000000000000009998505050505050505050565b6060808367ffffffffffffffff81118015611e1457600080fd5b50604051908082528060200260200182016040528015611e3e578160200160208202803683370190505b50905060005b84811015611e6c5783828281518110611e5957fe5b6020908102919091010152600101611e44565b509392505050565b600082820183811015611ee857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f536166654d617468236164643a204f564552464c4f5700000000000000000000604482015290519081900360640190fd5b939250505056fe436f6e7175657374563323656e7472793a20494e56414c49445f4944535f41525241595f4c454e4754485469657265644f776e61626c652361737369676e4f776e6572736869703a20494e56414c49445f41444452455353436f6e7175657374563323656e7472793a20504c415945525f414c52454144595f494e5f434f4e5155455354436f6e717565737456332365786974436f6e71756573743a20555345525f49535f4e4f545f494e5f434f4e5155455354436f6e7175657374563323656e7472793a20494e56414c49445f414d4f554e54535f41525241595f4c454e475448436f6e71756573745633236d696e74476f6c643a204e4f5f474f4c445f544f5f42455f4d494e5445445f464f525f544849535f434f4e5155455354436f6e7175657374563323656e7472793a20494e56414c49445f454e5452595f544f4b454e5f49445469657265644f776e61626c65236f6e6c794f776e6572546965723a204f574e45525f544945525f49535f544f4f5f4c4f57436f6e717565737456332365786974436f6e71756573743a20494e56414c49445f52455741524453436f6e7175657374563323656e7472793a20494e56414c49445f454e5452595f544f4b454e5f41444452455353436f6e717565737456332365786974436f6e71756573743a20494e56414c49445f434f4e51554553545f4e4f4e4345436f6e7175657374563323656e7472793a20494e56414c49445f454e5452595f544f4b454e5f414d4f554e545469657265644f776e61626c652361737369676e4f776e6572736869703a205550444154494e475f53454c465f54494552a26469706673582212203b3ffb1f241652df4de6e33f974eacbc02e0a5560e7ae08d2d71e2ff1725673364736f6c634300070400335469657265644f776e61626c6523636f6e7374727563746f723a20494e56414c49445f46495253545f4f574e4552436f6e7175657374563323636f6e7374727563746f723a20494e56414c49445f494e505554";
