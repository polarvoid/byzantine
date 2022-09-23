window.SIDEBAR_ITEMS = {"attr":[["access_control","Executes the given access control method before running the decorated instruction handler. Any method in scope of the attribute can be invoked with any arguments from the associated instruction handler."],["account","An attribute for a data structure representing a Solana account."],["constant","A marker attribute used to mark const values that should be included in the generated IDL but functionally does nothing."],["error_code","Generates `Error` and `type Result<T> = Result<T, Error>` types to be used as return types from Anchor instruction handlers. Importantly, the attribute implements `From` on the `ErrorCode` to support converting from the user defined error enum into the generated `Error`."],["event","The event attribute allows a struct to be used with emit! so that programs can log significant events in their programs that clients can subscribe to. Currently, this macro is for structs only."],["interface","The `#[interface]` attribute allows one to define an external program dependency, without having any knowledge about the program, other than the fact that it implements the given trait."],["program","The `#[program]` attribute defines the module containing all instruction handlers defining all entries into a Solana program."],["state","The `#[state]` attribute defines the program’s state struct, i.e., the program’s global account singleton giving the program the illusion of state."],["zero_copy","A data structure that can be used as an internal field for a zero copy deserialized account, i.e., a struct marked with `#[account(zero_copy)]`."]],"derive":[["Accounts","Implements an `Accounts` deserializer on the given struct. Can provide further functionality through the use of attributes."],["AnchorDeserialize","Borsh is the default serialization format for instructions and accounts."],["AnchorSerialize","Borsh is the default serialization format for instructions and accounts."]],"macro":[["declare_id","Defines the program’s ID. This should be used at the root of all Anchor based programs."],["emit","Logs an event that can be subscribed to by clients. Uses the `sol_log_data` syscall which results in the following log:"],["err","Returns with the given error. Use this with a custom error type."],["error","Generates an `Error::AnchorError` that includes file and line information."],["require","Ensures a condition is true, otherwise returns with the given error. Use this with or without a custom error type."],["require_eq","Ensures two NON-PUBKEY values are equal."],["require_gt","Ensures the first NON-PUBKEY value is greater than the second NON-PUBKEY value."],["require_gte","Ensures the first NON-PUBKEY value is greater than or equal to the second NON-PUBKEY value."],["require_keys_eq","Ensures two pubkeys values are equal."],["require_keys_neq","Ensures two pubkeys are not equal."],["require_neq","Ensures two NON-PUBKEY values are not equal."],["source","Creates a `Source`"]],"mod":[["accounts","Account types that can be used in the account validation struct."],["context","Data structures that are used to provide non-argument inputs to program endpoints"],["error",""],["prelude","The prelude contains all commonly used components of the crate. All programs should include it via `anchor_lang::prelude::*;`."],["system_program",""]],"struct":[["ProgramData",""]],"trait":[["AccountDeserialize","A data structure that can be deserialized and stored into account storage, i.e. an `AccountInfo`’s mutable data slice."],["AccountSerialize","A data structure that can be serialized and stored into account storage, i.e. an `AccountInfo`’s mutable data slice."],["Accounts","A data structure of validated accounts that can be deserialized from the input to a Solana program. Implementations of this trait should perform any and all requisite constraint checks on accounts to ensure the accounts maintain any invariants required for the program to run securely. In most cases, it’s recommended to use the `Accounts` derive macro to implement this trait."],["AccountsClose","The close procedure to initiate garabage collection of an account, allowing one to retrieve the rent exemption."],["AccountsExit","The exit procedure for an account. Any cleanup or persistence to storage should be done here."],["AnchorDeserialize","Borsh is the default serialization format for instructions and accounts. A data-structure that can be de-serialized from binary format by NBOR."],["AnchorSerialize","Borsh is the default serialization format for instructions and accounts. A data-structure that can be serialized into binary format by NBOR."],["Bump","Bump seed for program derived addresses."],["Discriminator","8 byte unique identifier for a type."],["Event","An event that can be emitted via a Solana log. See `emit!` for an example."],["Id","Defines the id of a program."],["InstructionData","Calculates the data for an instruction invocation, where the data is `Sha256(<namespace>:<method_name>)[..8] || BorshSerialize(args)`. `args` is a borsh serialized struct of named fields for each argument given to an instruction."],["Key","Defines the Pubkey of an account."],["Owner","Defines an address expected to own an account."],["ToAccountInfo","Transformation to an `AccountInfo` struct."],["ToAccountInfos","Transformation to `AccountInfo` structs."],["ToAccountMetas","Transformation to `AccountMeta` structs."],["ZeroCopy","An account data structure capable of zero copy deserialization."]],"type":[["Result",""]]};