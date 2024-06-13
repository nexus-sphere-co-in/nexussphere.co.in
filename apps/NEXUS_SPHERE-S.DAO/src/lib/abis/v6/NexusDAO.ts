/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace NexusDAO {
  export type ProposalStructStruct = {
    id: BigNumberish;
    amount: BigNumberish;
    duration: BigNumberish;
    upvotes: BigNumberish;
    downvotes: BigNumberish;
    title: string;
    description: string;
    passed: boolean;
    paid: boolean;
    beneficiary: AddressLike;
    proposer: AddressLike;
    executor: AddressLike;
  };

  export type ProposalStructStructOutput = [
    id: bigint,
    amount: bigint,
    duration: bigint,
    upvotes: bigint,
    downvotes: bigint,
    title: string,
    description: string,
    passed: boolean,
    paid: boolean,
    beneficiary: string,
    proposer: string,
    executor: string
  ] & {
    id: bigint;
    amount: bigint;
    duration: bigint;
    upvotes: bigint;
    downvotes: bigint;
    title: string;
    description: string;
    passed: boolean;
    paid: boolean;
    beneficiary: string;
    proposer: string;
    executor: string;
  };

  export type VotedStructStruct = {
    voter: AddressLike;
    timestamp: BigNumberish;
    choosen: boolean;
  };

  export type VotedStructStructOutput = [
    voter: string,
    timestamp: bigint,
    choosen: boolean
  ] & { voter: string; timestamp: bigint; choosen: boolean };
}

export interface NexusDAOInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "daoBalance"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
      | "createProposal"
      | "performVote"
      | "payBeneficiary"
      | "contribute"
      | "getProposals"
      | "getProposal"
      | "getVotesOf"
      | "getStakeholderVotes"
      | "getStakeholderBalance"
      | "isStakeholder"
      | "getContributorBalance"
      | "isContributor"
      | "getBalance"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Action"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "daoBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createProposal",
    values: [string, string, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "performVote",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "payBeneficiary",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "contribute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProposals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProposal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotesOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeholderVotes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeholderBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isStakeholder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getContributorBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isContributor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "daoBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "performVote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "contribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVotesOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStakeholderVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeholderBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isStakeholder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContributorBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isContributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
}

export namespace ActionEvent {
  export type InputTuple = [
    initiator: AddressLike,
    role: BytesLike,
    message: string,
    beneficiary: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    initiator: string,
    role: string,
    message: string,
    beneficiary: string,
    amount: bigint
  ];
  export interface OutputObject {
    initiator: string;
    role: string;
    message: string;
    beneficiary: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface NexusDAO extends BaseContract {
  connect(runner?: ContractRunner | null): NexusDAO;
  waitForDeployment(): Promise<this>;

  interface: NexusDAOInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  daoBalance: TypedContractMethod<[], [bigint], "view">;

  /**
   * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
   */
  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  /**
   * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.
   */
  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  /**
   * Returns `true` if `account` has been granted `role`.
   */
  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  /**
   * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.
   */
  renounceRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  /**
   * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.
   */
  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  /**
   * See {IERC165-supportsInterface}.
   */
  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  createProposal: TypedContractMethod<
    [
      title: string,
      description: string,
      beneficiary: AddressLike,
      amount: BigNumberish
    ],
    [NexusDAO.ProposalStructStructOutput],
    "nonpayable"
  >;

  performVote: TypedContractMethod<
    [proposalId: BigNumberish, choosen: boolean],
    [NexusDAO.VotedStructStructOutput],
    "nonpayable"
  >;

  payBeneficiary: TypedContractMethod<
    [proposalId: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  contribute: TypedContractMethod<[], [bigint], "payable">;

  getProposals: TypedContractMethod<
    [],
    [NexusDAO.ProposalStructStructOutput[]],
    "view"
  >;

  getProposal: TypedContractMethod<
    [proposalId: BigNumberish],
    [NexusDAO.ProposalStructStructOutput],
    "view"
  >;

  getVotesOf: TypedContractMethod<
    [proposalId: BigNumberish],
    [NexusDAO.VotedStructStructOutput[]],
    "view"
  >;

  getStakeholderVotes: TypedContractMethod<[], [bigint[]], "view">;

  getStakeholderBalance: TypedContractMethod<[], [bigint], "view">;

  isStakeholder: TypedContractMethod<[], [boolean], "view">;

  getContributorBalance: TypedContractMethod<[], [bigint], "view">;

  isContributor: TypedContractMethod<[], [boolean], "view">;

  getBalance: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "daoBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "createProposal"
  ): TypedContractMethod<
    [
      title: string,
      description: string,
      beneficiary: AddressLike,
      amount: BigNumberish
    ],
    [NexusDAO.ProposalStructStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "performVote"
  ): TypedContractMethod<
    [proposalId: BigNumberish, choosen: boolean],
    [NexusDAO.VotedStructStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "payBeneficiary"
  ): TypedContractMethod<[proposalId: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "contribute"
  ): TypedContractMethod<[], [bigint], "payable">;
  getFunction(
    nameOrSignature: "getProposals"
  ): TypedContractMethod<[], [NexusDAO.ProposalStructStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getProposal"
  ): TypedContractMethod<
    [proposalId: BigNumberish],
    [NexusDAO.ProposalStructStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVotesOf"
  ): TypedContractMethod<
    [proposalId: BigNumberish],
    [NexusDAO.VotedStructStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getStakeholderVotes"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getStakeholderBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isStakeholder"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "getContributorBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isContributor"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "getBalance"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "Action"
  ): TypedContractEvent<
    ActionEvent.InputTuple,
    ActionEvent.OutputTuple,
    ActionEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;

  filters: {
    "Action(address,bytes32,string,address,uint256)": TypedContractEvent<
      ActionEvent.InputTuple,
      ActionEvent.OutputTuple,
      ActionEvent.OutputObject
    >;
    Action: TypedContractEvent<
      ActionEvent.InputTuple,
      ActionEvent.OutputTuple,
      ActionEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
  };
}
