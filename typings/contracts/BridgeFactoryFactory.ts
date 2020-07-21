/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { BridgeFactory } from "./BridgeFactory";

export class BridgeFactoryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _assetsAddr: string,
    _arcadeumCoinAddr: string,
    _arcadeumCoinID: BigNumberish,
    _periodMintLimit: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<BridgeFactory> {
    return super.deploy(
      _assetsAddr,
      _arcadeumCoinAddr,
      _arcadeumCoinID,
      _periodMintLimit,
      overrides
    ) as Promise<BridgeFactory>;
  }
  getDeployTransaction(
    _assetsAddr: string,
    _arcadeumCoinAddr: string,
    _arcadeumCoinID: BigNumberish,
    _periodMintLimit: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(
      _assetsAddr,
      _arcadeumCoinAddr,
      _arcadeumCoinID,
      _periodMintLimit,
      overrides
    );
  }
  attach(address: string): BridgeFactory {
    return super.attach(address) as BridgeFactory;
  }
  connect(signer: Signer): BridgeFactoryFactory {
    return super.connect(signer) as BridgeFactoryFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeFactory {
    return new Contract(address, _abi, signerOrProvider) as BridgeFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_assetsAddr",
        type: "address"
      },
      {
        internalType: "address",
        name: "_arcadeumCoinAddr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_arcadeumCoinID",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_periodMintLimit",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "previousTier",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newTier",
        type: "uint256"
      }
    ],
    name: "OwnershipGranted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldMintingLimit",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMintingLimit",
        type: "uint256"
      }
    ],
    name: "PeriodMintLimitChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      }
    ],
    name: "ReDeposit",
    type: "event"
  },
  {
    stateMutability: "nonpayable",
    type: "fallback"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_tier",
        type: "uint256"
      }
    ],
    name: "assignOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      }
    ],
    name: "batchMint",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getAvailableSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    name: "getOwnerTier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPeriodMintLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getSkyweaverAssets",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "livePeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newPeriodMintLimit",
        type: "uint256"
      }
    ],
    name: "updatePeriodMintLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200169d3803806200169d833981016040819052620000349162000177565b336000818152602081905260408082206000199081905590519092907fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e908390a46001600160a01b038416158015906200009657506001600160a01b03831615155b8015620000a35750600081115b620000cb5760405162461bcd60e51b8152600401620000c290620001ce565b60405180910390fd5b6001600160601b0319606085811b821660805284901b1660a05260c0829052620000fd6001600160e01b036200015116565b600155600281905560038190556040517fdc39d5ec34d8ece158f93c14cfb036acb3e58e254416fe92f43b3a0acd3c4d3d906200013f906000908490620001c0565b60405180910390a15050505062000216565b615460420490565b80516001600160a01b03811681146200017157600080fd5b92915050565b600080600080608085870312156200018d578384fd5b62000199868662000159565b9350620001aa866020870162000159565b6040860151606090960151949790965092505050565b918252602082015260400190565b60208082526028908201527f427269646765466163746f727923636f6e7374727563746f723a20494e56414c604082015267125117d25394155560c21b606082015260800190565b60805160601c60a05160601c60c05161142762000276600039806104745280610537528061073d52806109265250806104465280610506528061071552806108fe52508061034e52806106595280610688528061097352506114276000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063bc197c8111610071578063bc197c8114610163578063c167d1cd14610183578063c56cecd11461018b578063e8f35d5a1461019e578063f23a6e61146101b1578063f6869803146101c4576100b4565b806301ffc9a7146100d55780630ca83480146100fe57806325f5af00146101115780634bb78b14146101265780635d511a111461013b57806365d9c8ad1461014e575b60405162461bcd60e51b81526004016100cc906112b4565b60405180910390fd5b6100e86100e3366004610e48565b6101cc565b6040516100f5919061104f565b60405180910390f35b6100e861010c366004610d21565b610203565b6101196103ce565b6040516100f5919061105a565b610139610134366004610da0565b6103d4565b005b610139610149366004610e1e565b61059e565b610156610657565b6040516100f59190610f0e565b610176610171366004610c12565b61067b565b6040516100f59190611063565b61011961082f565b610139610199366004610e70565b610852565b6101196101ac366004610bf0565b6108d6565b6101766101bf366004610cbc565b6108f1565b610119610a70565b60006001600160e01b031982166301ffc9a760e01b14806101fd57506001600160e01b03198216630271189760e51b145b92915050565b336000908152602081905260408120546001908111156102355760405162461bcd60e51b81526004016100cc9061120e565b600061023f610a70565b90506000600154821461025457600354610258565b6002545b905060005b8781101561032257600087878381811061027357fe5b905060200201358303905082811161028d57809250610319565b60048054600101908190556040516001600160a01b038d16917fe8ba28f97389c655863789bb4666312ace3889ed512039ccc26799917acf5b43918d918d918d918d916102dd919060200161105a565b60405160208183030381529060405280519060200120604051610304959493929190610fe7565b60405180910390a260009550505050506103c4565b5060010161025d565b50600281905560015482146103375760018290555b604051635a455c5b60e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b48ab8b69061038b908c908c908c908c908c90600401610f7b565b600060405180830381600087803b1580156103a557600080fd5b505af11580156103b9573d6000803e3d6000fd5b505050506001935050505b5095945050505050565b60035490565b33600090815260208190526040902054600019908111156104075760405162461bcd60e51b81526004016100cc9061120e565b6001600160a01b03841661042d5760405162461bcd60e51b81526004016100cc906110cb565b604051627eeac760e11b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169062fdd58e9061049c9030907f000000000000000000000000000000000000000000000000000000000000000090600401610fce565b60206040518083038186803b1580156104b457600080fd5b505afa1580156104c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ec9190610e88565b604051637921219560e11b81529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063f242432a9061056590309089907f00000000000000000000000000000000000000000000000000000000000000009087908b908b90600401610f22565b600060405180830381600087803b15801561057f57600080fd5b505af1158015610593573d6000803e3d6000fd5b505050505050505050565b33600090815260208190526040902054600019908111156105d15760405162461bcd60e51b81526004016100cc9061120e565b6001600160a01b0383166105f75760405162461bcd60e51b81526004016100cc90611354565b6001600160a01b038316600081815260208190526040808220549051859391927fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e91a4506001600160a01b03909116600090815260208190526040902055565b7f000000000000000000000000000000000000000000000000000000000000000090565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561070a576040516320ec271b60e01b815233906320ec271b906106d39087908790600401611021565b600060405180830381600087803b1580156106ed57600080fd5b505af1158015610701573d6000803e3d6000fd5b505050506107cc565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156107b4577f00000000000000000000000000000000000000000000000000000000000000008460008151811061076957fe5b60200260200101511461078e5760405162461bcd60e51b81526004016100cc90611260565b83516001146107af5760405162461bcd60e51b81526004016100cc90611114565b6107cc565b60405162461bcd60e51b81526004016100cc90611078565b6001600160a01b0385167f678afb2e81183654e6389bac063af1933c7935f97aceeae5aaa51bc54662cf8861080884600063ffffffff610a7816565b604051610815919061105a565b60405180910390a25063bc197c8160e01b95945050505050565b600060015461083c610a70565b146108495760035461084d565b6002545b905090565b33600090815260208190526040902054600019908111156108855760405162461bcd60e51b81526004016100cc9061120e565b8160025411156108955760028290555b7fdc39d5ec34d8ece158f93c14cfb036acb3e58e254416fe92f43b3a0acd3c4d3d600354836040516108c89291906113a4565b60405180910390a150600355565b6001600160a01b031660009081526020819052604090205490565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610968577f000000000000000000000000000000000000000000000000000000000000000084146109635760405162461bcd60e51b81526004016100cc906111bf565b610a0d565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156109f55760405163b390c0ab60e01b8152339063b390c0ab906109be90879087906004016113a4565b600060405180830381600087803b1580156109d857600080fd5b505af11580156109ec573d6000803e3d6000fd5b50505050610a0d565b60405162461bcd60e51b81526004016100cc90611171565b6001600160a01b0385167f678afb2e81183654e6389bac063af1933c7935f97aceeae5aaa51bc54662cf88610a4984600063ffffffff610a7816565b604051610a56919061105a565b60405180910390a25063f23a6e6160e01b95945050505050565b615460420490565b60008160200183511015610a9e5760405162461bcd60e51b81526004016100cc906112f7565b50016020015190565b80356001600160a01b03811681146101fd57600080fd5b60008083601f840112610acf578182fd5b50813567ffffffffffffffff811115610ae6578182fd5b6020830191508360208083028501011115610b0057600080fd5b9250929050565b600082601f830112610b17578081fd5b813567ffffffffffffffff811115610b2d578182fd5b6020808202610b3d8282016113b2565b83815293508184018583018287018401881015610b5957600080fd5b600092505b84831015610b7c578035825260019290920191908301908301610b5e565b505050505092915050565b600082601f830112610b97578081fd5b813567ffffffffffffffff811115610bad578182fd5b610bc0601f8201601f19166020016113b2565b9150808252836020828501011115610bd757600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215610c01578081fd5b610c0b8383610aa7565b9392505050565b600080600080600060a08688031215610c29578081fd5b8535610c34816113d9565b94506020860135610c44816113d9565b9350604086013567ffffffffffffffff80821115610c60578283fd5b610c6c89838a01610b07565b94506060880135915080821115610c81578283fd5b610c8d89838a01610b07565b93506080880135915080821115610ca2578283fd5b50610caf88828901610b87565b9150509295509295909350565b600080600080600060a08688031215610cd3578081fd5b610cdd8787610aa7565b9450610cec8760208801610aa7565b93506040860135925060608601359150608086013567ffffffffffffffff811115610d15578182fd5b610caf88828901610b87565b600080600080600060608688031215610d38578081fd5b610d428787610aa7565b9450602086013567ffffffffffffffff80821115610d5e578283fd5b610d6a89838a01610abe565b90965094506040880135915080821115610d82578283fd5b50610d8f88828901610abe565b969995985093965092949392505050565b600080600060408486031215610db4578283fd5b8335610dbf816113d9565b9250602084013567ffffffffffffffff80821115610ddb578384fd5b81860187601f820112610dec578485fd5b8035925081831115610dfc578485fd5b876020848301011115610e0d578485fd5b949760209095019650909450505050565b60008060408385031215610e30578182fd5b610e3a8484610aa7565b946020939093013593505050565b600060208284031215610e59578081fd5b81356001600160e01b031981168114610c0b578182fd5b600060208284031215610e81578081fd5b5035919050565b600060208284031215610e99578081fd5b5051919050565b81835260006001600160fb1b03831115610eb8578081fd5b6020830280836020870137939093016020019283525090919050565b6000815180845260208085019450808401835b83811015610f0357815187529582019590820190600101610ee7565b509495945050505050565b6001600160a01b0391909116815260200190565b6001600160a01b03878116825286166020820152604081018590526060810184905260a06080820181905281018290526000828460c084013781830160c090810191909152601f909201601f1916010195945050505050565b6001600160a01b0386168152608060208201819052600090610fa09083018688610ea0565b8281036040840152610fb3818587610ea0565b83810360609094019390935250815260200195945050505050565b6001600160a01b03929092168252602082015260400190565b600060608252610ffb606083018789610ea0565b828103602084015261100e818688610ea0565b9150508260408301529695505050505050565b6000604082526110346040830185610ed4565b82810360208401526110468185610ed4565b95945050505050565b901515815260200190565b90815260200190565b6001600160e01b031991909116815260200190565b60208082526033908201527f427269646765466163746f7279236f6e4552433131353542617463685265636560408201527234bb32b21d1024a72b20a624a22faa27a5a2a760691b606082015260800190565b60208082526029908201527f427269646765466163746f72792377697468647261773a20494e56414c49445f604082015268149150d2541251539560ba1b606082015260800190565b6020808252603a908201527f427269646765466163746f7279236f6e4552433131353542617463685265636560408201527f697665643a20494e56414c49445f41525241595f4c454e475448000000000000606082015260800190565b6020808252602e908201527f427269646765466163746f7279236f6e4552433131353552656365697665643a60408201526d1024a72b20a624a22faa27a5a2a760911b606082015260800190565b6020808252602f908201527f427269646765466163746f7279236f6e4552433131353552656365697665643a60408201526e081253959053125117d05490d7d251608a1b606082015260800190565b60208082526032908201527f5469657265644f776e61626c65236f6e6c794f776e6572546965723a204f574e60408201527145525f544945525f49535f544f4f5f4c4f5760701b606082015260800190565b60208082526034908201527f427269646765466163746f7279236f6e455243313135354261746368526563656040820152731a5d99590e881253959053125117d05490d7d25160621b606082015260800190565b60208082526023908201527f427269646765466163746f7279235f3a20554e535550504f525445445f4d45546040820152621213d160ea1b606082015260800190565b6020808252603c908201527f4c696242797465732372656164427974657333323a20475245415445525f4f5260408201527f5f455155414c5f544f5f33325f4c454e4754485f524551554952454400000000606082015260800190565b60208082526030908201527f5469657265644f776e61626c65237472616e736665724f776e6572736869703a60408201526f20494e56414c49445f4144445245535360801b606082015260800190565b918252602082015260400190565b60405181810167ffffffffffffffff811182821017156113d157600080fd5b604052919050565b6001600160a01b03811681146113ee57600080fd5b5056fea2646970667358221220ddc9ea88c4c22bbdbbcde36041d485e7bec296fa3096ff518e7d57aa5347e79f64736f6c63430006080033";
