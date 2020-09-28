/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { TieredOwnableMock } from "./TieredOwnableMock";

export class TieredOwnableMockFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _firstOwner: string,
    overrides?: TransactionOverrides
  ): Promise<TieredOwnableMock> {
    return super.deploy(_firstOwner, overrides) as Promise<TieredOwnableMock>;
  }
  getDeployTransaction(
    _firstOwner: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_firstOwner, overrides);
  }
  attach(address: string): TieredOwnableMock {
    return super.attach(address) as TieredOwnableMock;
  }
  connect(signer: Signer): TieredOwnableMockFactory {
    return super.connect(signer) as TieredOwnableMockFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TieredOwnableMock {
    return new Contract(address, _abi, signerOrProvider) as TieredOwnableMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_firstOwner",
        type: "address"
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
    inputs: [],
    name: "anyone",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
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
    name: "onlyMaxTier",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "onlyTierFive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "onlyTierZero",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516104bf3803806104bf83398101604081905261002f91610083565b6001600160a01b0381166000818152602081905260408082206000199081905590518493919291907fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e908390a450506100b1565b600060208284031215610094578081fd5b81516001600160a01b03811681146100aa578182fd5b9392505050565b6103ff806100c06000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80635d511a1114610067578063785beeb91461007c578063a67c68e81461009a578063dd9fb4f6146100a2578063e8f35d5a146100aa578063f9dd0818146100ca575b600080fd5b61007a61007536600461029a565b6100d2565b005b6100846101bd565b60405161009191906102c4565b60405180910390f35b6100846101c2565b6100846101fc565b6100bd6100b8366004610278565b61020d565b60405161009191906103c0565b610084610228565b336000908152602081905260409020546000199081111561010e5760405162461bcd60e51b81526004016101059061031d565b60405180910390fd5b6001600160a01b0383166101345760405162461bcd60e51b8152600401610105906102cf565b336001600160a01b038416141561015d5760405162461bcd60e51b81526004016101059061036f565b6001600160a01b038316600081815260208190526040808220549051859391927fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e91a4506001600160a01b03909116600090815260208190526040902055565b600190565b336000908152602081905260408120546005908111156101f45760405162461bcd60e51b81526004016101059061031d565b600191505090565b3360009081526020819052806101f4565b6001600160a01b031660009081526020819052604090205490565b33600090815260208190526040812054600019908111156101f45760405162461bcd60e51b81526004016101059061031d565b80356001600160a01b038116811461027257600080fd5b92915050565b600060208284031215610289578081fd5b610293838361025b565b9392505050565b600080604083850312156102ac578081fd5b6102b6848461025b565b946020939093013593505050565b901515815260200190565b6020808252602e908201527f5469657265644f776e61626c652361737369676e4f776e6572736869703a204960408201526d4e56414c49445f4144445245535360901b606082015260800190565b60208082526032908201527f5469657265644f776e61626c65236f6e6c794f776e6572546965723a204f574e60408201527145525f544945525f49535f544f4f5f4c4f5760701b606082015260800190565b60208082526031908201527f5469657265644f776e61626c652361737369676e4f776e6572736869703a2055604082015270282220aa24a723afa9a2a6232faa24a2a960791b606082015260800190565b9081526020019056fea2646970667358221220ebebe6370a9b925f9335bc84093c0600bb0da5167d42e2e238069d1569b6e4db64736f6c63430006080033";
