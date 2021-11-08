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

import type { Conquest } from "../Conquest";

export class Conquest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _firstOwner: string,
    _skyweaverAssetsAddress: string,
    _silverCardFactoryAddress: string,
    _goldCardFactoryAddress: string,
    _conquestEntryTokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Conquest> {
    return super.deploy(
      _firstOwner,
      _skyweaverAssetsAddress,
      _silverCardFactoryAddress,
      _goldCardFactoryAddress,
      _conquestEntryTokenId,
      overrides || {}
    ) as Promise<Conquest>;
  }
  getDeployTransaction(
    _firstOwner: string,
    _skyweaverAssetsAddress: string,
    _silverCardFactoryAddress: string,
    _goldCardFactoryAddress: string,
    _conquestEntryTokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _firstOwner,
      _skyweaverAssetsAddress,
      _silverCardFactoryAddress,
      _goldCardFactoryAddress,
      _conquestEntryTokenId,
      overrides || {}
    );
  }
  attach(address: string): Conquest {
    return super.attach(address) as Conquest;
  }
  connect(signer: Signer): Conquest__factory {
    return super.connect(signer) as Conquest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Conquest {
    return new Contract(address, _abi, signerOrProvider) as Conquest;
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
        indexed: false,
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
        name: "",
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
        name: "",
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
        name: "",
        type: "address",
      },
    ],
    name: "nextConquestTime",
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
  "0x61010060405234801561001157600080fd5b50604051611b49380380611b49833981810160405260a081101561003457600080fd5b508051602082015160408301516060840151608090940151929391929091908473ffffffffffffffffffffffffffffffffffffffff81166100c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611af8602e913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166000818152602081905260408082207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9081905590519092907fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e908390a45073ffffffffffffffffffffffffffffffffffffffff841615801590610170575073ffffffffffffffffffffffffffffffffffffffff831615155b8015610191575073ffffffffffffffffffffffffffffffffffffffff821615155b6101e6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611b266023913960400191505060405180910390fd5b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606094851b811660c05292841b8316608052921b1660a05260e0525060805160601c60a05160601c60c05160601c60e05161186f610289600039806107445280610ae55280610dc152508061096b52806109b95280610df05250806107205280611372525080610768528061105f52806111cf528061122f525061186f6000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063a0cf65581161008c578063cdd28b0d11610066578063cdd28b0d1461049e578063e048aef61461057d578063e8f35d5a146105b0578063f23a6e61146105e3576100df565b8063a0cf65581461022f578063bc197c8114610262578063bc7cce601461046b576100df565b80633647c84d116100bd5780633647c84d146101e45780635d511a11146101ec57806384f4076e14610227576100df565b806301ffc9a714610146578063094227d41461019957806317119df5146101ca575b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f436f6e7175657374235f3a20554e535550504f525445445f4d4554484f440000604482015290519081900360640190fd5b6101856004803603602081101561015c57600080fd5b50357fffffffff0000000000000000000000000000000000000000000000000000000016610685565b604080519115158252519081900360200190f35b6101a161071e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101d2610742565b60408051918252519081900360200190f35b6101a1610766565b6102256004803603604081101561020257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561078a565b005b6101a1610969565b6101d26004803603602081101561024557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661098d565b610436600480360360a081101561027857600080fd5b73ffffffffffffffffffffffffffffffffffffffff82358116926020810135909116918101906060810160408201356401000000008111156102b957600080fd5b8201836020820111156102cb57600080fd5b803590602001918460208302840111640100000000831117156102ed57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561033d57600080fd5b82018360208201111561034f57600080fd5b8035906020019184602083028401116401000000008311171561037157600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156103c157600080fd5b8201836020820111156103d357600080fd5b803590602001918460018302840111640100000000831117156103f557600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061099f945050505050565b604080517fffffffff000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b6101856004803603602081101561048157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610ed6565b610225600480360360608110156104b457600080fd5b73ffffffffffffffffffffffffffffffffffffffff82351691908101906040810160208201356401000000008111156104ec57600080fd5b8201836020820111156104fe57600080fd5b8035906020019184602083028401116401000000008311171561052057600080fd5b91939092909160208101903564010000000081111561053e57600080fd5b82018360208201111561055057600080fd5b8035906020019184602083028401116401000000008311171561057257600080fd5b509092509050610eeb565b6101d26004803603602081101561059357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611417565b6101d2600480360360208110156105c657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611429565b610436600480360360a08110156105f957600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a08101608082013564010000000081111561064657600080fd5b82018360208201111561065857600080fd5b8035906020019184600183028401116401000000008311171561067a57600080fd5b509092509050611451565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000148061071857507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b336000908152602081905260409020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90811115610814576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806117816032913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316610880576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061165c602e913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff841614156108ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806118096031913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316600081815260208190526040808220549051859391927fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e91a45073ffffffffffffffffffffffffffffffffffffffff909116600090815260208190526040902055565b7f000000000000000000000000000000000000000000000000000000000000000081565b60026020526000908152604090205481565b60003373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610a2f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806116b2602b913960400191505060405180910390fd5b8351600114610a89576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061168a6028913960400191505060405180910390fd5b8251600114610ae3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806117dd602c913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000084600081518110610b1157fe5b602002602001015114610b6f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806116dd6026913960400191505060405180910390fd5b6002600a0a83600081518110610b8157fe5b602002602001015114610bdf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806117b3602a913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff851660009081526001602052604090205460ff1615610c5e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611731602a913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8516600090815260036020526040902054421015610cdc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806116366026913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8516600090815260016020818152604080842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001684179055600290915290912054610d3e91611540565b73ffffffffffffffffffffffffffffffffffffffff8616600090815260026020526040902055610d6f426001611540565b73ffffffffffffffffffffffffffffffffffffffff8087166000908152600360205260408082209390935582517fb390c0ab0000000000000000000000000000000000000000000000000000000081527f000000000000000000000000000000000000000000000000000000000000000060048201526064602482015292517f00000000000000000000000000000000000000000000000000000000000000009092169263b390c0ab926044808301939282900301818387803b158015610e3557600080fd5b505af1158015610e49573d6000803e3d6000fd5b50505073ffffffffffffffffffffffffffffffffffffffff86166000818152600260209081526040918290205482519384529083015280517fcfc6e20f951fff57781db2894b809461f33221319f91c415940263667ae9a6e79350918290030190a1507fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b60016020526000908152604090205460ff1681565b33600090815260208190526040902054600190811115610f56576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806117816032913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff861660009081526001602052604090205460ff16610fd4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611703602e913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8616600090815260016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690558315801561102b575081155b156110355761140f565b600184148015611043575081155b156111a55773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663b48ab8b6878787611093600160646115bb565b6040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018060200184810384528787828181526020019250602002808284376000838201819052601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018681038552875181528751602091820193828a0193509102908190849084905b8381101561114f578181015183820152602001611137565b50505050905001848103825260008152602001602001975050505050505050600060405180830381600087803b15801561118857600080fd5b505af115801561119c573d6000803e3d6000fd5b5050505061140f565b6002841480156111b3575081155b156112035773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663b48ab8b6878787611093600260646115bb565b6001841480156112135750600182145b156113be5773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663b48ab8b6878787611263600160646115bb565b6040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018060200184810384528787828181526020019250602002808284376000838201819052601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018681038552875181528751602091820193828a0193509102908190849084905b8381101561131f578181015183820152602001611307565b50505050905001848103825260008152602001602001975050505050505050600060405180830381600087803b15801561135857600080fd5b505af115801561136c573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b48ab8b687858561109360016002600a0a6115bb565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061175b6026913960400191505060405180910390fd5b505050505050565b60036020526000908152604090205481565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6040805160018082528183019092526000916060919060208083019080368337505060408051600180825281830190925292935060609291506020808301908036833701905050905086826000815181106114a857fe5b60200260200101818152505085816000815181106114c257fe5b6020026020010181815250506115118989848489898080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061099f92505050565b507ff23a6e61000000000000000000000000000000000000000000000000000000009998505050505050505050565b6000828201838110156115b457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f536166654d617468236164643a204f564552464c4f5700000000000000000000604482015290519081900360640190fd5b9392505050565b6060808367ffffffffffffffff811180156115d557600080fd5b506040519080825280602002602001820160405280156115ff578160200160208202803683370190505b50905060005b8481101561162d578382828151811061161a57fe5b6020908102919091010152600101611605565b50939250505056fe436f6e717565737423656e7472793a204e45575f434f4e51554553545f544f4f5f4541524c595469657265644f776e61626c652361737369676e4f776e6572736869703a20494e56414c49445f41444452455353436f6e717565737423656e7472793a20494e56414c49445f4944535f41525241595f4c454e475448436f6e717565737423656e7472793a20494e56414c49445f454e5452595f544f4b454e5f41444452455353436f6e717565737423656e7472793a20494e56414c49445f454e5452595f544f4b454e5f4944436f6e71756573742365786974436f6e71756573743a20555345525f49535f4e4f545f494e5f434f4e5155455354436f6e717565737423656e7472793a20504c415945525f414c52454144595f494e5f434f4e5155455354436f6e71756573742365786974436f6e71756573743a20494e56414c49445f524557415244535469657265644f776e61626c65236f6e6c794f776e6572546965723a204f574e45525f544945525f49535f544f4f5f4c4f57436f6e717565737423656e7472793a20494e56414c49445f454e5452595f544f4b454e5f414d4f554e54436f6e717565737423656e7472793a20494e56414c49445f414d4f554e54535f41525241595f4c454e4754485469657265644f776e61626c652361737369676e4f776e6572736869703a205550444154494e475f53454c465f54494552a264697066735822122066048b45270f0fa487c2916251de8e786fa609460d93ed1fc71250c0e359d4ae64736f6c634300070400335469657265644f776e61626c6523636f6e7374727563746f723a20494e56414c49445f46495253545f4f574e4552436f6e717565737423636f6e7374727563746f723a20494e56414c49445f494e505554";
