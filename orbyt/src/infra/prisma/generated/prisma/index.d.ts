
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model InvestmentWallet
 * 
 */
export type InvestmentWallet = $Result.DefaultSelection<Prisma.$InvestmentWalletPayload>
/**
 * Model Investment
 * 
 */
export type Investment = $Result.DefaultSelection<Prisma.$InvestmentPayload>
/**
 * Model Currency
 * 
 */
export type Currency = $Result.DefaultSelection<Prisma.$CurrencyPayload>
/**
 * Model FinanceWallet
 * 
 */
export type FinanceWallet = $Result.DefaultSelection<Prisma.$FinanceWalletPayload>
/**
 * Model MonthReport
 * 
 */
export type MonthReport = $Result.DefaultSelection<Prisma.$MonthReportPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const InvestmentCategory: {
  STOCK: 'STOCK',
  FII: 'FII',
  ETF: 'ETF',
  CRYPTO: 'CRYPTO',
  FIXED_INCOME: 'FIXED_INCOME'
};

export type InvestmentCategory = (typeof InvestmentCategory)[keyof typeof InvestmentCategory]


export const TransactionType: {
  FOOD: 'FOOD',
  HEALTH: 'HEALTH',
  OTHER: 'OTHER'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  RECEIVED: 'RECEIVED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]

}

export type InvestmentCategory = $Enums.InvestmentCategory

export const InvestmentCategory: typeof $Enums.InvestmentCategory

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investmentWallet`: Exposes CRUD operations for the **InvestmentWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvestmentWallets
    * const investmentWallets = await prisma.investmentWallet.findMany()
    * ```
    */
  get investmentWallet(): Prisma.InvestmentWalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investment`: Exposes CRUD operations for the **Investment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investments
    * const investments = await prisma.investment.findMany()
    * ```
    */
  get investment(): Prisma.InvestmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.currency`: Exposes CRUD operations for the **Currency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currency.findMany()
    * ```
    */
  get currency(): Prisma.CurrencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financeWallet`: Exposes CRUD operations for the **FinanceWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinanceWallets
    * const financeWallets = await prisma.financeWallet.findMany()
    * ```
    */
  get financeWallet(): Prisma.FinanceWalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthReport`: Exposes CRUD operations for the **MonthReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthReports
    * const monthReports = await prisma.monthReport.findMany()
    * ```
    */
  get monthReport(): Prisma.MonthReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    InvestmentWallet: 'InvestmentWallet',
    Investment: 'Investment',
    Currency: 'Currency',
    FinanceWallet: 'FinanceWallet',
    MonthReport: 'MonthReport',
    Transaction: 'Transaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "investmentWallet" | "investment" | "currency" | "financeWallet" | "monthReport" | "transaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      InvestmentWallet: {
        payload: Prisma.$InvestmentWalletPayload<ExtArgs>
        fields: Prisma.InvestmentWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentWalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentWalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentWalletPayload>
          }
          findFirst: {
            args: Prisma.InvestmentWalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentWalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentWalletPayload>
          }
          findMany: {
            args: Prisma.InvestmentWalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentWalletPayload>[]
          }
          create: {
            args: Prisma.InvestmentWalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentWalletPayload>
          }
          createMany: {
            args: Prisma.InvestmentWalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentWalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentWalletPayload>[]
          }
          delete: {
            args: Prisma.InvestmentWalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentWalletPayload>
          }
          update: {
            args: Prisma.InvestmentWalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentWalletPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentWalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentWalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentWalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentWalletPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentWalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentWalletPayload>
          }
          aggregate: {
            args: Prisma.InvestmentWalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestmentWallet>
          }
          groupBy: {
            args: Prisma.InvestmentWalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentWalletCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentWalletCountAggregateOutputType> | number
          }
        }
      }
      Investment: {
        payload: Prisma.$InvestmentPayload<ExtArgs>
        fields: Prisma.InvestmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findFirst: {
            args: Prisma.InvestmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findMany: {
            args: Prisma.InvestmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          create: {
            args: Prisma.InvestmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          createMany: {
            args: Prisma.InvestmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          delete: {
            args: Prisma.InvestmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          update: {
            args: Prisma.InvestmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          aggregate: {
            args: Prisma.InvestmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestment>
          }
          groupBy: {
            args: Prisma.InvestmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentCountAggregateOutputType> | number
          }
        }
      }
      Currency: {
        payload: Prisma.$CurrencyPayload<ExtArgs>
        fields: Prisma.CurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findFirst: {
            args: Prisma.CurrencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findMany: {
            args: Prisma.CurrencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          create: {
            args: Prisma.CurrencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          createMany: {
            args: Prisma.CurrencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurrencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          delete: {
            args: Prisma.CurrencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          update: {
            args: Prisma.CurrencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          deleteMany: {
            args: Prisma.CurrencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurrencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          upsert: {
            args: Prisma.CurrencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          aggregate: {
            args: Prisma.CurrencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrency>
          }
          groupBy: {
            args: Prisma.CurrencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrencyCountArgs<ExtArgs>
            result: $Utils.Optional<CurrencyCountAggregateOutputType> | number
          }
        }
      }
      FinanceWallet: {
        payload: Prisma.$FinanceWalletPayload<ExtArgs>
        fields: Prisma.FinanceWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceWalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceWalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceWalletPayload>
          }
          findFirst: {
            args: Prisma.FinanceWalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceWalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceWalletPayload>
          }
          findMany: {
            args: Prisma.FinanceWalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceWalletPayload>[]
          }
          create: {
            args: Prisma.FinanceWalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceWalletPayload>
          }
          createMany: {
            args: Prisma.FinanceWalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinanceWalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceWalletPayload>[]
          }
          delete: {
            args: Prisma.FinanceWalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceWalletPayload>
          }
          update: {
            args: Prisma.FinanceWalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceWalletPayload>
          }
          deleteMany: {
            args: Prisma.FinanceWalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceWalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinanceWalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceWalletPayload>[]
          }
          upsert: {
            args: Prisma.FinanceWalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceWalletPayload>
          }
          aggregate: {
            args: Prisma.FinanceWalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinanceWallet>
          }
          groupBy: {
            args: Prisma.FinanceWalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinanceWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinanceWalletCountArgs<ExtArgs>
            result: $Utils.Optional<FinanceWalletCountAggregateOutputType> | number
          }
        }
      }
      MonthReport: {
        payload: Prisma.$MonthReportPayload<ExtArgs>
        fields: Prisma.MonthReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthReportPayload>
          }
          findFirst: {
            args: Prisma.MonthReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthReportPayload>
          }
          findMany: {
            args: Prisma.MonthReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthReportPayload>[]
          }
          create: {
            args: Prisma.MonthReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthReportPayload>
          }
          createMany: {
            args: Prisma.MonthReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthReportPayload>[]
          }
          delete: {
            args: Prisma.MonthReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthReportPayload>
          }
          update: {
            args: Prisma.MonthReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthReportPayload>
          }
          deleteMany: {
            args: Prisma.MonthReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonthReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthReportPayload>[]
          }
          upsert: {
            args: Prisma.MonthReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthReportPayload>
          }
          aggregate: {
            args: Prisma.MonthReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthReport>
          }
          groupBy: {
            args: Prisma.MonthReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthReportCountArgs<ExtArgs>
            result: $Utils.Optional<MonthReportCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    investmentWallet?: InvestmentWalletOmit
    investment?: InvestmentOmit
    currency?: CurrencyOmit
    financeWallet?: FinanceWalletOmit
    monthReport?: MonthReportOmit
    transaction?: TransactionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    financeWallets: number
    investmentWallets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financeWallets?: boolean | UserCountOutputTypeCountFinanceWalletsArgs
    investmentWallets?: boolean | UserCountOutputTypeCountInvestmentWalletsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinanceWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceWalletWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvestmentWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWalletWhereInput
  }


  /**
   * Count Type InvestmentWalletCountOutputType
   */

  export type InvestmentWalletCountOutputType = {
    investments: number
  }

  export type InvestmentWalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | InvestmentWalletCountOutputTypeCountInvestmentsArgs
  }

  // Custom InputTypes
  /**
   * InvestmentWalletCountOutputType without action
   */
  export type InvestmentWalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWalletCountOutputType
     */
    select?: InvestmentWalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvestmentWalletCountOutputType without action
   */
  export type InvestmentWalletCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }


  /**
   * Count Type CurrencyCountOutputType
   */

  export type CurrencyCountOutputType = {
    wallets: number
    finances: number
  }

  export type CurrencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallets?: boolean | CurrencyCountOutputTypeCountWalletsArgs
    finances?: boolean | CurrencyCountOutputTypeCountFinancesArgs
  }

  // Custom InputTypes
  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyCountOutputType
     */
    select?: CurrencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWalletWhereInput
  }

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountFinancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceWalletWhereInput
  }


  /**
   * Count Type FinanceWalletCountOutputType
   */

  export type FinanceWalletCountOutputType = {
    transactions: number
    monthReports: number
  }

  export type FinanceWalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | FinanceWalletCountOutputTypeCountTransactionsArgs
    monthReports?: boolean | FinanceWalletCountOutputTypeCountMonthReportsArgs
  }

  // Custom InputTypes
  /**
   * FinanceWalletCountOutputType without action
   */
  export type FinanceWalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWalletCountOutputType
     */
    select?: FinanceWalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FinanceWalletCountOutputType without action
   */
  export type FinanceWalletCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * FinanceWalletCountOutputType without action
   */
  export type FinanceWalletCountOutputTypeCountMonthReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthReportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    activatedAt: Date | null
    name: string | null
    email: string | null
    hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    activatedAt: Date | null
    name: string | null
    email: string | null
    hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    activatedAt: number
    name: number
    email: number
    hash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    activatedAt?: true
    name?: true
    email?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    activatedAt?: true
    name?: true
    email?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    activatedAt?: true
    name?: true
    email?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    activatedAt: Date | null
    name: string
    email: string
    hash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activatedAt?: boolean
    name?: boolean
    email?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    financeWallets?: boolean | User$financeWalletsArgs<ExtArgs>
    investmentWallets?: boolean | User$investmentWalletsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activatedAt?: boolean
    name?: boolean
    email?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activatedAt?: boolean
    name?: boolean
    email?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    activatedAt?: boolean
    name?: boolean
    email?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activatedAt" | "name" | "email" | "hash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financeWallets?: boolean | User$financeWalletsArgs<ExtArgs>
    investmentWallets?: boolean | User$investmentWalletsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      financeWallets: Prisma.$FinanceWalletPayload<ExtArgs>[]
      investmentWallets: Prisma.$InvestmentWalletPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      activatedAt: Date | null
      name: string
      email: string
      hash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    financeWallets<T extends User$financeWalletsArgs<ExtArgs> = {}>(args?: Subset<T, User$financeWalletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    investmentWallets<T extends User$investmentWalletsArgs<ExtArgs> = {}>(args?: Subset<T, User$investmentWalletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly activatedAt: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly hash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.financeWallets
   */
  export type User$financeWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWallet
     */
    select?: FinanceWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceWallet
     */
    omit?: FinanceWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceWalletInclude<ExtArgs> | null
    where?: FinanceWalletWhereInput
    orderBy?: FinanceWalletOrderByWithRelationInput | FinanceWalletOrderByWithRelationInput[]
    cursor?: FinanceWalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinanceWalletScalarFieldEnum | FinanceWalletScalarFieldEnum[]
  }

  /**
   * User.investmentWallets
   */
  export type User$investmentWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWallet
     */
    select?: InvestmentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentWallet
     */
    omit?: InvestmentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentWalletInclude<ExtArgs> | null
    where?: InvestmentWalletWhereInput
    orderBy?: InvestmentWalletOrderByWithRelationInput | InvestmentWalletOrderByWithRelationInput[]
    cursor?: InvestmentWalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentWalletScalarFieldEnum | InvestmentWalletScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model InvestmentWallet
   */

  export type AggregateInvestmentWallet = {
    _count: InvestmentWalletCountAggregateOutputType | null
    _min: InvestmentWalletMinAggregateOutputType | null
    _max: InvestmentWalletMaxAggregateOutputType | null
  }

  export type InvestmentWalletMinAggregateOutputType = {
    id: string | null
    name: string | null
    currencyId: string | null
    userId: string | null
  }

  export type InvestmentWalletMaxAggregateOutputType = {
    id: string | null
    name: string | null
    currencyId: string | null
    userId: string | null
  }

  export type InvestmentWalletCountAggregateOutputType = {
    id: number
    name: number
    currencyId: number
    userId: number
    _all: number
  }


  export type InvestmentWalletMinAggregateInputType = {
    id?: true
    name?: true
    currencyId?: true
    userId?: true
  }

  export type InvestmentWalletMaxAggregateInputType = {
    id?: true
    name?: true
    currencyId?: true
    userId?: true
  }

  export type InvestmentWalletCountAggregateInputType = {
    id?: true
    name?: true
    currencyId?: true
    userId?: true
    _all?: true
  }

  export type InvestmentWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestmentWallet to aggregate.
     */
    where?: InvestmentWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentWallets to fetch.
     */
    orderBy?: InvestmentWalletOrderByWithRelationInput | InvestmentWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvestmentWallets
    **/
    _count?: true | InvestmentWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentWalletMaxAggregateInputType
  }

  export type GetInvestmentWalletAggregateType<T extends InvestmentWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestmentWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestmentWallet[P]>
      : GetScalarType<T[P], AggregateInvestmentWallet[P]>
  }




  export type InvestmentWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWalletWhereInput
    orderBy?: InvestmentWalletOrderByWithAggregationInput | InvestmentWalletOrderByWithAggregationInput[]
    by: InvestmentWalletScalarFieldEnum[] | InvestmentWalletScalarFieldEnum
    having?: InvestmentWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentWalletCountAggregateInputType | true
    _min?: InvestmentWalletMinAggregateInputType
    _max?: InvestmentWalletMaxAggregateInputType
  }

  export type InvestmentWalletGroupByOutputType = {
    id: string
    name: string
    currencyId: string
    userId: string
    _count: InvestmentWalletCountAggregateOutputType | null
    _min: InvestmentWalletMinAggregateOutputType | null
    _max: InvestmentWalletMaxAggregateOutputType | null
  }

  type GetInvestmentWalletGroupByPayload<T extends InvestmentWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentWalletGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentWalletGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currencyId?: boolean
    userId?: boolean
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    investments?: boolean | InvestmentWallet$investmentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | InvestmentWalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investmentWallet"]>

  export type InvestmentWalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currencyId?: boolean
    userId?: boolean
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investmentWallet"]>

  export type InvestmentWalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currencyId?: boolean
    userId?: boolean
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investmentWallet"]>

  export type InvestmentWalletSelectScalar = {
    id?: boolean
    name?: boolean
    currencyId?: boolean
    userId?: boolean
  }

  export type InvestmentWalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "currencyId" | "userId", ExtArgs["result"]["investmentWallet"]>
  export type InvestmentWalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    investments?: boolean | InvestmentWallet$investmentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | InvestmentWalletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvestmentWalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvestmentWalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvestmentWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvestmentWallet"
    objects: {
      currency: Prisma.$CurrencyPayload<ExtArgs>
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      currencyId: string
      userId: string
    }, ExtArgs["result"]["investmentWallet"]>
    composites: {}
  }

  type InvestmentWalletGetPayload<S extends boolean | null | undefined | InvestmentWalletDefaultArgs> = $Result.GetResult<Prisma.$InvestmentWalletPayload, S>

  type InvestmentWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentWalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentWalletCountAggregateInputType | true
    }

  export interface InvestmentWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvestmentWallet'], meta: { name: 'InvestmentWallet' } }
    /**
     * Find zero or one InvestmentWallet that matches the filter.
     * @param {InvestmentWalletFindUniqueArgs} args - Arguments to find a InvestmentWallet
     * @example
     * // Get one InvestmentWallet
     * const investmentWallet = await prisma.investmentWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentWalletFindUniqueArgs>(args: SelectSubset<T, InvestmentWalletFindUniqueArgs<ExtArgs>>): Prisma__InvestmentWalletClient<$Result.GetResult<Prisma.$InvestmentWalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvestmentWallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentWalletFindUniqueOrThrowArgs} args - Arguments to find a InvestmentWallet
     * @example
     * // Get one InvestmentWallet
     * const investmentWallet = await prisma.investmentWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentWalletFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentWalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentWalletClient<$Result.GetResult<Prisma.$InvestmentWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvestmentWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentWalletFindFirstArgs} args - Arguments to find a InvestmentWallet
     * @example
     * // Get one InvestmentWallet
     * const investmentWallet = await prisma.investmentWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentWalletFindFirstArgs>(args?: SelectSubset<T, InvestmentWalletFindFirstArgs<ExtArgs>>): Prisma__InvestmentWalletClient<$Result.GetResult<Prisma.$InvestmentWalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvestmentWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentWalletFindFirstOrThrowArgs} args - Arguments to find a InvestmentWallet
     * @example
     * // Get one InvestmentWallet
     * const investmentWallet = await prisma.investmentWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentWalletFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentWalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentWalletClient<$Result.GetResult<Prisma.$InvestmentWalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvestmentWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvestmentWallets
     * const investmentWallets = await prisma.investmentWallet.findMany()
     * 
     * // Get first 10 InvestmentWallets
     * const investmentWallets = await prisma.investmentWallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentWalletWithIdOnly = await prisma.investmentWallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentWalletFindManyArgs>(args?: SelectSubset<T, InvestmentWalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvestmentWallet.
     * @param {InvestmentWalletCreateArgs} args - Arguments to create a InvestmentWallet.
     * @example
     * // Create one InvestmentWallet
     * const InvestmentWallet = await prisma.investmentWallet.create({
     *   data: {
     *     // ... data to create a InvestmentWallet
     *   }
     * })
     * 
     */
    create<T extends InvestmentWalletCreateArgs>(args: SelectSubset<T, InvestmentWalletCreateArgs<ExtArgs>>): Prisma__InvestmentWalletClient<$Result.GetResult<Prisma.$InvestmentWalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvestmentWallets.
     * @param {InvestmentWalletCreateManyArgs} args - Arguments to create many InvestmentWallets.
     * @example
     * // Create many InvestmentWallets
     * const investmentWallet = await prisma.investmentWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentWalletCreateManyArgs>(args?: SelectSubset<T, InvestmentWalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvestmentWallets and returns the data saved in the database.
     * @param {InvestmentWalletCreateManyAndReturnArgs} args - Arguments to create many InvestmentWallets.
     * @example
     * // Create many InvestmentWallets
     * const investmentWallet = await prisma.investmentWallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvestmentWallets and only return the `id`
     * const investmentWalletWithIdOnly = await prisma.investmentWallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentWalletCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentWalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentWalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvestmentWallet.
     * @param {InvestmentWalletDeleteArgs} args - Arguments to delete one InvestmentWallet.
     * @example
     * // Delete one InvestmentWallet
     * const InvestmentWallet = await prisma.investmentWallet.delete({
     *   where: {
     *     // ... filter to delete one InvestmentWallet
     *   }
     * })
     * 
     */
    delete<T extends InvestmentWalletDeleteArgs>(args: SelectSubset<T, InvestmentWalletDeleteArgs<ExtArgs>>): Prisma__InvestmentWalletClient<$Result.GetResult<Prisma.$InvestmentWalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvestmentWallet.
     * @param {InvestmentWalletUpdateArgs} args - Arguments to update one InvestmentWallet.
     * @example
     * // Update one InvestmentWallet
     * const investmentWallet = await prisma.investmentWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentWalletUpdateArgs>(args: SelectSubset<T, InvestmentWalletUpdateArgs<ExtArgs>>): Prisma__InvestmentWalletClient<$Result.GetResult<Prisma.$InvestmentWalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvestmentWallets.
     * @param {InvestmentWalletDeleteManyArgs} args - Arguments to filter InvestmentWallets to delete.
     * @example
     * // Delete a few InvestmentWallets
     * const { count } = await prisma.investmentWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentWalletDeleteManyArgs>(args?: SelectSubset<T, InvestmentWalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestmentWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvestmentWallets
     * const investmentWallet = await prisma.investmentWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentWalletUpdateManyArgs>(args: SelectSubset<T, InvestmentWalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestmentWallets and returns the data updated in the database.
     * @param {InvestmentWalletUpdateManyAndReturnArgs} args - Arguments to update many InvestmentWallets.
     * @example
     * // Update many InvestmentWallets
     * const investmentWallet = await prisma.investmentWallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvestmentWallets and only return the `id`
     * const investmentWalletWithIdOnly = await prisma.investmentWallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvestmentWalletUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentWalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentWalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvestmentWallet.
     * @param {InvestmentWalletUpsertArgs} args - Arguments to update or create a InvestmentWallet.
     * @example
     * // Update or create a InvestmentWallet
     * const investmentWallet = await prisma.investmentWallet.upsert({
     *   create: {
     *     // ... data to create a InvestmentWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvestmentWallet we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentWalletUpsertArgs>(args: SelectSubset<T, InvestmentWalletUpsertArgs<ExtArgs>>): Prisma__InvestmentWalletClient<$Result.GetResult<Prisma.$InvestmentWalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvestmentWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentWalletCountArgs} args - Arguments to filter InvestmentWallets to count.
     * @example
     * // Count the number of InvestmentWallets
     * const count = await prisma.investmentWallet.count({
     *   where: {
     *     // ... the filter for the InvestmentWallets we want to count
     *   }
     * })
    **/
    count<T extends InvestmentWalletCountArgs>(
      args?: Subset<T, InvestmentWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvestmentWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestmentWalletAggregateArgs>(args: Subset<T, InvestmentWalletAggregateArgs>): Prisma.PrismaPromise<GetInvestmentWalletAggregateType<T>>

    /**
     * Group by InvestmentWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentWalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestmentWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentWalletGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentWalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestmentWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvestmentWallet model
   */
  readonly fields: InvestmentWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvestmentWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    currency<T extends CurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurrencyDefaultArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    investments<T extends InvestmentWallet$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, InvestmentWallet$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvestmentWallet model
   */
  interface InvestmentWalletFieldRefs {
    readonly id: FieldRef<"InvestmentWallet", 'String'>
    readonly name: FieldRef<"InvestmentWallet", 'String'>
    readonly currencyId: FieldRef<"InvestmentWallet", 'String'>
    readonly userId: FieldRef<"InvestmentWallet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InvestmentWallet findUnique
   */
  export type InvestmentWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWallet
     */
    select?: InvestmentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentWallet
     */
    omit?: InvestmentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentWalletInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentWallet to fetch.
     */
    where: InvestmentWalletWhereUniqueInput
  }

  /**
   * InvestmentWallet findUniqueOrThrow
   */
  export type InvestmentWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWallet
     */
    select?: InvestmentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentWallet
     */
    omit?: InvestmentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentWalletInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentWallet to fetch.
     */
    where: InvestmentWalletWhereUniqueInput
  }

  /**
   * InvestmentWallet findFirst
   */
  export type InvestmentWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWallet
     */
    select?: InvestmentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentWallet
     */
    omit?: InvestmentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentWalletInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentWallet to fetch.
     */
    where?: InvestmentWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentWallets to fetch.
     */
    orderBy?: InvestmentWalletOrderByWithRelationInput | InvestmentWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestmentWallets.
     */
    cursor?: InvestmentWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestmentWallets.
     */
    distinct?: InvestmentWalletScalarFieldEnum | InvestmentWalletScalarFieldEnum[]
  }

  /**
   * InvestmentWallet findFirstOrThrow
   */
  export type InvestmentWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWallet
     */
    select?: InvestmentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentWallet
     */
    omit?: InvestmentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentWalletInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentWallet to fetch.
     */
    where?: InvestmentWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentWallets to fetch.
     */
    orderBy?: InvestmentWalletOrderByWithRelationInput | InvestmentWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestmentWallets.
     */
    cursor?: InvestmentWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestmentWallets.
     */
    distinct?: InvestmentWalletScalarFieldEnum | InvestmentWalletScalarFieldEnum[]
  }

  /**
   * InvestmentWallet findMany
   */
  export type InvestmentWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWallet
     */
    select?: InvestmentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentWallet
     */
    omit?: InvestmentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentWalletInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentWallets to fetch.
     */
    where?: InvestmentWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentWallets to fetch.
     */
    orderBy?: InvestmentWalletOrderByWithRelationInput | InvestmentWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvestmentWallets.
     */
    cursor?: InvestmentWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentWallets.
     */
    skip?: number
    distinct?: InvestmentWalletScalarFieldEnum | InvestmentWalletScalarFieldEnum[]
  }

  /**
   * InvestmentWallet create
   */
  export type InvestmentWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWallet
     */
    select?: InvestmentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentWallet
     */
    omit?: InvestmentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentWalletInclude<ExtArgs> | null
    /**
     * The data needed to create a InvestmentWallet.
     */
    data: XOR<InvestmentWalletCreateInput, InvestmentWalletUncheckedCreateInput>
  }

  /**
   * InvestmentWallet createMany
   */
  export type InvestmentWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvestmentWallets.
     */
    data: InvestmentWalletCreateManyInput | InvestmentWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvestmentWallet createManyAndReturn
   */
  export type InvestmentWalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWallet
     */
    select?: InvestmentWalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentWallet
     */
    omit?: InvestmentWalletOmit<ExtArgs> | null
    /**
     * The data used to create many InvestmentWallets.
     */
    data: InvestmentWalletCreateManyInput | InvestmentWalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentWalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvestmentWallet update
   */
  export type InvestmentWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWallet
     */
    select?: InvestmentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentWallet
     */
    omit?: InvestmentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentWalletInclude<ExtArgs> | null
    /**
     * The data needed to update a InvestmentWallet.
     */
    data: XOR<InvestmentWalletUpdateInput, InvestmentWalletUncheckedUpdateInput>
    /**
     * Choose, which InvestmentWallet to update.
     */
    where: InvestmentWalletWhereUniqueInput
  }

  /**
   * InvestmentWallet updateMany
   */
  export type InvestmentWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvestmentWallets.
     */
    data: XOR<InvestmentWalletUpdateManyMutationInput, InvestmentWalletUncheckedUpdateManyInput>
    /**
     * Filter which InvestmentWallets to update
     */
    where?: InvestmentWalletWhereInput
    /**
     * Limit how many InvestmentWallets to update.
     */
    limit?: number
  }

  /**
   * InvestmentWallet updateManyAndReturn
   */
  export type InvestmentWalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWallet
     */
    select?: InvestmentWalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentWallet
     */
    omit?: InvestmentWalletOmit<ExtArgs> | null
    /**
     * The data used to update InvestmentWallets.
     */
    data: XOR<InvestmentWalletUpdateManyMutationInput, InvestmentWalletUncheckedUpdateManyInput>
    /**
     * Filter which InvestmentWallets to update
     */
    where?: InvestmentWalletWhereInput
    /**
     * Limit how many InvestmentWallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentWalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvestmentWallet upsert
   */
  export type InvestmentWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWallet
     */
    select?: InvestmentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentWallet
     */
    omit?: InvestmentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentWalletInclude<ExtArgs> | null
    /**
     * The filter to search for the InvestmentWallet to update in case it exists.
     */
    where: InvestmentWalletWhereUniqueInput
    /**
     * In case the InvestmentWallet found by the `where` argument doesn't exist, create a new InvestmentWallet with this data.
     */
    create: XOR<InvestmentWalletCreateInput, InvestmentWalletUncheckedCreateInput>
    /**
     * In case the InvestmentWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentWalletUpdateInput, InvestmentWalletUncheckedUpdateInput>
  }

  /**
   * InvestmentWallet delete
   */
  export type InvestmentWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWallet
     */
    select?: InvestmentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentWallet
     */
    omit?: InvestmentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentWalletInclude<ExtArgs> | null
    /**
     * Filter which InvestmentWallet to delete.
     */
    where: InvestmentWalletWhereUniqueInput
  }

  /**
   * InvestmentWallet deleteMany
   */
  export type InvestmentWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestmentWallets to delete
     */
    where?: InvestmentWalletWhereInput
    /**
     * Limit how many InvestmentWallets to delete.
     */
    limit?: number
  }

  /**
   * InvestmentWallet.investments
   */
  export type InvestmentWallet$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * InvestmentWallet without action
   */
  export type InvestmentWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWallet
     */
    select?: InvestmentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentWallet
     */
    omit?: InvestmentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentWalletInclude<ExtArgs> | null
  }


  /**
   * Model Investment
   */

  export type AggregateInvestment = {
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  export type InvestmentAvgAggregateOutputType = {
    quantity: number | null
    currentPrice: number | null
  }

  export type InvestmentSumAggregateOutputType = {
    quantity: number | null
    currentPrice: number | null
  }

  export type InvestmentMinAggregateOutputType = {
    id: string | null
    ticker: string | null
    category: $Enums.InvestmentCategory | null
    quantity: number | null
    currentPrice: number | null
    walletId: string | null
  }

  export type InvestmentMaxAggregateOutputType = {
    id: string | null
    ticker: string | null
    category: $Enums.InvestmentCategory | null
    quantity: number | null
    currentPrice: number | null
    walletId: string | null
  }

  export type InvestmentCountAggregateOutputType = {
    id: number
    ticker: number
    category: number
    quantity: number
    currentPrice: number
    walletId: number
    _all: number
  }


  export type InvestmentAvgAggregateInputType = {
    quantity?: true
    currentPrice?: true
  }

  export type InvestmentSumAggregateInputType = {
    quantity?: true
    currentPrice?: true
  }

  export type InvestmentMinAggregateInputType = {
    id?: true
    ticker?: true
    category?: true
    quantity?: true
    currentPrice?: true
    walletId?: true
  }

  export type InvestmentMaxAggregateInputType = {
    id?: true
    ticker?: true
    category?: true
    quantity?: true
    currentPrice?: true
    walletId?: true
  }

  export type InvestmentCountAggregateInputType = {
    id?: true
    ticker?: true
    category?: true
    quantity?: true
    currentPrice?: true
    walletId?: true
    _all?: true
  }

  export type InvestmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment to aggregate.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investments
    **/
    _count?: true | InvestmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentMaxAggregateInputType
  }

  export type GetInvestmentAggregateType<T extends InvestmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment[P]>
      : GetScalarType<T[P], AggregateInvestment[P]>
  }




  export type InvestmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithAggregationInput | InvestmentOrderByWithAggregationInput[]
    by: InvestmentScalarFieldEnum[] | InvestmentScalarFieldEnum
    having?: InvestmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentCountAggregateInputType | true
    _avg?: InvestmentAvgAggregateInputType
    _sum?: InvestmentSumAggregateInputType
    _min?: InvestmentMinAggregateInputType
    _max?: InvestmentMaxAggregateInputType
  }

  export type InvestmentGroupByOutputType = {
    id: string
    ticker: string
    category: $Enums.InvestmentCategory
    quantity: number
    currentPrice: number
    walletId: string
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  type GetInvestmentGroupByPayload<T extends InvestmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    category?: boolean
    quantity?: boolean
    currentPrice?: boolean
    walletId?: boolean
    wallet?: boolean | InvestmentWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    category?: boolean
    quantity?: boolean
    currentPrice?: boolean
    walletId?: boolean
    wallet?: boolean | InvestmentWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    category?: boolean
    quantity?: boolean
    currentPrice?: boolean
    walletId?: boolean
    wallet?: boolean | InvestmentWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectScalar = {
    id?: boolean
    ticker?: boolean
    category?: boolean
    quantity?: boolean
    currentPrice?: boolean
    walletId?: boolean
  }

  export type InvestmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticker" | "category" | "quantity" | "currentPrice" | "walletId", ExtArgs["result"]["investment"]>
  export type InvestmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | InvestmentWalletDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | InvestmentWalletDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | InvestmentWalletDefaultArgs<ExtArgs>
  }

  export type $InvestmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investment"
    objects: {
      wallet: Prisma.$InvestmentWalletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticker: string
      category: $Enums.InvestmentCategory
      quantity: number
      currentPrice: number
      walletId: string
    }, ExtArgs["result"]["investment"]>
    composites: {}
  }

  type InvestmentGetPayload<S extends boolean | null | undefined | InvestmentDefaultArgs> = $Result.GetResult<Prisma.$InvestmentPayload, S>

  type InvestmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentCountAggregateInputType | true
    }

  export interface InvestmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investment'], meta: { name: 'Investment' } }
    /**
     * Find zero or one Investment that matches the filter.
     * @param {InvestmentFindUniqueArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentFindUniqueArgs>(args: SelectSubset<T, InvestmentFindUniqueArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentFindUniqueOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentFindFirstArgs>(args?: SelectSubset<T, InvestmentFindFirstArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investments
     * const investments = await prisma.investment.findMany()
     * 
     * // Get first 10 Investments
     * const investments = await prisma.investment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentWithIdOnly = await prisma.investment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentFindManyArgs>(args?: SelectSubset<T, InvestmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investment.
     * @param {InvestmentCreateArgs} args - Arguments to create a Investment.
     * @example
     * // Create one Investment
     * const Investment = await prisma.investment.create({
     *   data: {
     *     // ... data to create a Investment
     *   }
     * })
     * 
     */
    create<T extends InvestmentCreateArgs>(args: SelectSubset<T, InvestmentCreateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investments.
     * @param {InvestmentCreateManyArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentCreateManyArgs>(args?: SelectSubset<T, InvestmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investments and returns the data saved in the database.
     * @param {InvestmentCreateManyAndReturnArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investment.
     * @param {InvestmentDeleteArgs} args - Arguments to delete one Investment.
     * @example
     * // Delete one Investment
     * const Investment = await prisma.investment.delete({
     *   where: {
     *     // ... filter to delete one Investment
     *   }
     * })
     * 
     */
    delete<T extends InvestmentDeleteArgs>(args: SelectSubset<T, InvestmentDeleteArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investment.
     * @param {InvestmentUpdateArgs} args - Arguments to update one Investment.
     * @example
     * // Update one Investment
     * const investment = await prisma.investment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentUpdateArgs>(args: SelectSubset<T, InvestmentUpdateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investments.
     * @param {InvestmentDeleteManyArgs} args - Arguments to filter Investments to delete.
     * @example
     * // Delete a few Investments
     * const { count } = await prisma.investment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentDeleteManyArgs>(args?: SelectSubset<T, InvestmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentUpdateManyArgs>(args: SelectSubset<T, InvestmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments and returns the data updated in the database.
     * @param {InvestmentUpdateManyAndReturnArgs} args - Arguments to update many Investments.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvestmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investment.
     * @param {InvestmentUpsertArgs} args - Arguments to update or create a Investment.
     * @example
     * // Update or create a Investment
     * const investment = await prisma.investment.upsert({
     *   create: {
     *     // ... data to create a Investment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentUpsertArgs>(args: SelectSubset<T, InvestmentUpsertArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentCountArgs} args - Arguments to filter Investments to count.
     * @example
     * // Count the number of Investments
     * const count = await prisma.investment.count({
     *   where: {
     *     // ... the filter for the Investments we want to count
     *   }
     * })
    **/
    count<T extends InvestmentCountArgs>(
      args?: Subset<T, InvestmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestmentAggregateArgs>(args: Subset<T, InvestmentAggregateArgs>): Prisma.PrismaPromise<GetInvestmentAggregateType<T>>

    /**
     * Group by Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investment model
   */
  readonly fields: InvestmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends InvestmentWalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvestmentWalletDefaultArgs<ExtArgs>>): Prisma__InvestmentWalletClient<$Result.GetResult<Prisma.$InvestmentWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Investment model
   */
  interface InvestmentFieldRefs {
    readonly id: FieldRef<"Investment", 'String'>
    readonly ticker: FieldRef<"Investment", 'String'>
    readonly category: FieldRef<"Investment", 'InvestmentCategory'>
    readonly quantity: FieldRef<"Investment", 'Float'>
    readonly currentPrice: FieldRef<"Investment", 'Float'>
    readonly walletId: FieldRef<"Investment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Investment findUnique
   */
  export type InvestmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findUniqueOrThrow
   */
  export type InvestmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findFirst
   */
  export type InvestmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findFirstOrThrow
   */
  export type InvestmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findMany
   */
  export type InvestmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment create
   */
  export type InvestmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Investment.
     */
    data: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
  }

  /**
   * Investment createMany
   */
  export type InvestmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investment createManyAndReturn
   */
  export type InvestmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment update
   */
  export type InvestmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Investment.
     */
    data: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
    /**
     * Choose, which Investment to update.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment updateMany
   */
  export type InvestmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
  }

  /**
   * Investment updateManyAndReturn
   */
  export type InvestmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment upsert
   */
  export type InvestmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Investment to update in case it exists.
     */
    where: InvestmentWhereUniqueInput
    /**
     * In case the Investment found by the `where` argument doesn't exist, create a new Investment with this data.
     */
    create: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
    /**
     * In case the Investment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
  }

  /**
   * Investment delete
   */
  export type InvestmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter which Investment to delete.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment deleteMany
   */
  export type InvestmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investments to delete
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to delete.
     */
    limit?: number
  }

  /**
   * Investment without action
   */
  export type InvestmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
  }


  /**
   * Model Currency
   */

  export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  export type CurrencyMinAggregateOutputType = {
    id: string | null
    symbol: string | null
    code: string | null
  }

  export type CurrencyMaxAggregateOutputType = {
    id: string | null
    symbol: string | null
    code: string | null
  }

  export type CurrencyCountAggregateOutputType = {
    id: number
    symbol: number
    code: number
    _all: number
  }


  export type CurrencyMinAggregateInputType = {
    id?: true
    symbol?: true
    code?: true
  }

  export type CurrencyMaxAggregateInputType = {
    id?: true
    symbol?: true
    code?: true
  }

  export type CurrencyCountAggregateInputType = {
    id?: true
    symbol?: true
    code?: true
    _all?: true
  }

  export type CurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currency to aggregate.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Currencies
    **/
    _count?: true | CurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyMaxAggregateInputType
  }

  export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrency[P]>
      : GetScalarType<T[P], AggregateCurrency[P]>
  }




  export type CurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrencyWhereInput
    orderBy?: CurrencyOrderByWithAggregationInput | CurrencyOrderByWithAggregationInput[]
    by: CurrencyScalarFieldEnum[] | CurrencyScalarFieldEnum
    having?: CurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyCountAggregateInputType | true
    _min?: CurrencyMinAggregateInputType
    _max?: CurrencyMaxAggregateInputType
  }

  export type CurrencyGroupByOutputType = {
    id: string
    symbol: string
    code: string
    _count: CurrencyCountAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  type GetCurrencyGroupByPayload<T extends CurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
        }
      >
    >


  export type CurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    code?: boolean
    wallets?: boolean | Currency$walletsArgs<ExtArgs>
    finances?: boolean | Currency$financesArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    code?: boolean
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    code?: boolean
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectScalar = {
    id?: boolean
    symbol?: boolean
    code?: boolean
  }

  export type CurrencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "symbol" | "code", ExtArgs["result"]["currency"]>
  export type CurrencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallets?: boolean | Currency$walletsArgs<ExtArgs>
    finances?: boolean | Currency$financesArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CurrencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CurrencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Currency"
    objects: {
      wallets: Prisma.$InvestmentWalletPayload<ExtArgs>[]
      finances: Prisma.$FinanceWalletPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      symbol: string
      code: string
    }, ExtArgs["result"]["currency"]>
    composites: {}
  }

  type CurrencyGetPayload<S extends boolean | null | undefined | CurrencyDefaultArgs> = $Result.GetResult<Prisma.$CurrencyPayload, S>

  type CurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurrencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurrencyCountAggregateInputType | true
    }

  export interface CurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Currency'], meta: { name: 'Currency' } }
    /**
     * Find zero or one Currency that matches the filter.
     * @param {CurrencyFindUniqueArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrencyFindUniqueArgs>(args: SelectSubset<T, CurrencyFindUniqueArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Currency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurrencyFindUniqueOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrencyFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrencyFindFirstArgs>(args?: SelectSubset<T, CurrencyFindFirstArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrencyFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currency.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currencyWithIdOnly = await prisma.currency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurrencyFindManyArgs>(args?: SelectSubset<T, CurrencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Currency.
     * @param {CurrencyCreateArgs} args - Arguments to create a Currency.
     * @example
     * // Create one Currency
     * const Currency = await prisma.currency.create({
     *   data: {
     *     // ... data to create a Currency
     *   }
     * })
     * 
     */
    create<T extends CurrencyCreateArgs>(args: SelectSubset<T, CurrencyCreateArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Currencies.
     * @param {CurrencyCreateManyArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrencyCreateManyArgs>(args?: SelectSubset<T, CurrencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Currencies and returns the data saved in the database.
     * @param {CurrencyCreateManyAndReturnArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Currencies and only return the `id`
     * const currencyWithIdOnly = await prisma.currency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurrencyCreateManyAndReturnArgs>(args?: SelectSubset<T, CurrencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Currency.
     * @param {CurrencyDeleteArgs} args - Arguments to delete one Currency.
     * @example
     * // Delete one Currency
     * const Currency = await prisma.currency.delete({
     *   where: {
     *     // ... filter to delete one Currency
     *   }
     * })
     * 
     */
    delete<T extends CurrencyDeleteArgs>(args: SelectSubset<T, CurrencyDeleteArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Currency.
     * @param {CurrencyUpdateArgs} args - Arguments to update one Currency.
     * @example
     * // Update one Currency
     * const currency = await prisma.currency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrencyUpdateArgs>(args: SelectSubset<T, CurrencyUpdateArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Currencies.
     * @param {CurrencyDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrencyDeleteManyArgs>(args?: SelectSubset<T, CurrencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrencyUpdateManyArgs>(args: SelectSubset<T, CurrencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies and returns the data updated in the database.
     * @param {CurrencyUpdateManyAndReturnArgs} args - Arguments to update many Currencies.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Currencies and only return the `id`
     * const currencyWithIdOnly = await prisma.currency.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CurrencyUpdateManyAndReturnArgs>(args: SelectSubset<T, CurrencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Currency.
     * @param {CurrencyUpsertArgs} args - Arguments to update or create a Currency.
     * @example
     * // Update or create a Currency
     * const currency = await prisma.currency.upsert({
     *   create: {
     *     // ... data to create a Currency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currency we want to update
     *   }
     * })
     */
    upsert<T extends CurrencyUpsertArgs>(args: SelectSubset<T, CurrencyUpsertArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currency.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends CurrencyCountArgs>(
      args?: Subset<T, CurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurrencyAggregateArgs>(args: Subset<T, CurrencyAggregateArgs>): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>

    /**
     * Group by Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrencyGroupByArgs['orderBy'] }
        : { orderBy?: CurrencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Currency model
   */
  readonly fields: CurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Currency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallets<T extends Currency$walletsArgs<ExtArgs> = {}>(args?: Subset<T, Currency$walletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    finances<T extends Currency$financesArgs<ExtArgs> = {}>(args?: Subset<T, Currency$financesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Currency model
   */
  interface CurrencyFieldRefs {
    readonly id: FieldRef<"Currency", 'String'>
    readonly symbol: FieldRef<"Currency", 'String'>
    readonly code: FieldRef<"Currency", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Currency findUnique
   */
  export type CurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency findUniqueOrThrow
   */
  export type CurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency findFirst
   */
  export type CurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency findFirstOrThrow
   */
  export type CurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency findMany
   */
  export type CurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency create
   */
  export type CurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Currency.
     */
    data: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
  }

  /**
   * Currency createMany
   */
  export type CurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Currency createManyAndReturn
   */
  export type CurrencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Currency update
   */
  export type CurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Currency.
     */
    data: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
    /**
     * Choose, which Currency to update.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency updateMany
   */
  export type CurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to update.
     */
    limit?: number
  }

  /**
   * Currency updateManyAndReturn
   */
  export type CurrencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to update.
     */
    limit?: number
  }

  /**
   * Currency upsert
   */
  export type CurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Currency to update in case it exists.
     */
    where: CurrencyWhereUniqueInput
    /**
     * In case the Currency found by the `where` argument doesn't exist, create a new Currency with this data.
     */
    create: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
    /**
     * In case the Currency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
  }

  /**
   * Currency delete
   */
  export type CurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter which Currency to delete.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency deleteMany
   */
  export type CurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currencies to delete
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to delete.
     */
    limit?: number
  }

  /**
   * Currency.wallets
   */
  export type Currency$walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentWallet
     */
    select?: InvestmentWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentWallet
     */
    omit?: InvestmentWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentWalletInclude<ExtArgs> | null
    where?: InvestmentWalletWhereInput
    orderBy?: InvestmentWalletOrderByWithRelationInput | InvestmentWalletOrderByWithRelationInput[]
    cursor?: InvestmentWalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentWalletScalarFieldEnum | InvestmentWalletScalarFieldEnum[]
  }

  /**
   * Currency.finances
   */
  export type Currency$financesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWallet
     */
    select?: FinanceWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceWallet
     */
    omit?: FinanceWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceWalletInclude<ExtArgs> | null
    where?: FinanceWalletWhereInput
    orderBy?: FinanceWalletOrderByWithRelationInput | FinanceWalletOrderByWithRelationInput[]
    cursor?: FinanceWalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinanceWalletScalarFieldEnum | FinanceWalletScalarFieldEnum[]
  }

  /**
   * Currency without action
   */
  export type CurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
  }


  /**
   * Model FinanceWallet
   */

  export type AggregateFinanceWallet = {
    _count: FinanceWalletCountAggregateOutputType | null
    _avg: FinanceWalletAvgAggregateOutputType | null
    _sum: FinanceWalletSumAggregateOutputType | null
    _min: FinanceWalletMinAggregateOutputType | null
    _max: FinanceWalletMaxAggregateOutputType | null
  }

  export type FinanceWalletAvgAggregateOutputType = {
    balance: number | null
  }

  export type FinanceWalletSumAggregateOutputType = {
    balance: number | null
  }

  export type FinanceWalletMinAggregateOutputType = {
    id: string | null
    name: string | null
    balance: number | null
    currencyId: string | null
    userId: string | null
  }

  export type FinanceWalletMaxAggregateOutputType = {
    id: string | null
    name: string | null
    balance: number | null
    currencyId: string | null
    userId: string | null
  }

  export type FinanceWalletCountAggregateOutputType = {
    id: number
    name: number
    balance: number
    currencyId: number
    userId: number
    _all: number
  }


  export type FinanceWalletAvgAggregateInputType = {
    balance?: true
  }

  export type FinanceWalletSumAggregateInputType = {
    balance?: true
  }

  export type FinanceWalletMinAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    currencyId?: true
    userId?: true
  }

  export type FinanceWalletMaxAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    currencyId?: true
    userId?: true
  }

  export type FinanceWalletCountAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    currencyId?: true
    userId?: true
    _all?: true
  }

  export type FinanceWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinanceWallet to aggregate.
     */
    where?: FinanceWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceWallets to fetch.
     */
    orderBy?: FinanceWalletOrderByWithRelationInput | FinanceWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinanceWallets
    **/
    _count?: true | FinanceWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinanceWalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinanceWalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceWalletMaxAggregateInputType
  }

  export type GetFinanceWalletAggregateType<T extends FinanceWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateFinanceWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinanceWallet[P]>
      : GetScalarType<T[P], AggregateFinanceWallet[P]>
  }




  export type FinanceWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceWalletWhereInput
    orderBy?: FinanceWalletOrderByWithAggregationInput | FinanceWalletOrderByWithAggregationInput[]
    by: FinanceWalletScalarFieldEnum[] | FinanceWalletScalarFieldEnum
    having?: FinanceWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceWalletCountAggregateInputType | true
    _avg?: FinanceWalletAvgAggregateInputType
    _sum?: FinanceWalletSumAggregateInputType
    _min?: FinanceWalletMinAggregateInputType
    _max?: FinanceWalletMaxAggregateInputType
  }

  export type FinanceWalletGroupByOutputType = {
    id: string
    name: string
    balance: number
    currencyId: string
    userId: string
    _count: FinanceWalletCountAggregateOutputType | null
    _avg: FinanceWalletAvgAggregateOutputType | null
    _sum: FinanceWalletSumAggregateOutputType | null
    _min: FinanceWalletMinAggregateOutputType | null
    _max: FinanceWalletMaxAggregateOutputType | null
  }

  type GetFinanceWalletGroupByPayload<T extends FinanceWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceWalletGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceWalletGroupByOutputType[P]>
        }
      >
    >


  export type FinanceWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    currencyId?: boolean
    userId?: boolean
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    transactions?: boolean | FinanceWallet$transactionsArgs<ExtArgs>
    monthReports?: boolean | FinanceWallet$monthReportsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | FinanceWalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financeWallet"]>

  export type FinanceWalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    currencyId?: boolean
    userId?: boolean
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financeWallet"]>

  export type FinanceWalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    currencyId?: boolean
    userId?: boolean
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financeWallet"]>

  export type FinanceWalletSelectScalar = {
    id?: boolean
    name?: boolean
    balance?: boolean
    currencyId?: boolean
    userId?: boolean
  }

  export type FinanceWalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "balance" | "currencyId" | "userId", ExtArgs["result"]["financeWallet"]>
  export type FinanceWalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    transactions?: boolean | FinanceWallet$transactionsArgs<ExtArgs>
    monthReports?: boolean | FinanceWallet$monthReportsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | FinanceWalletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FinanceWalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FinanceWalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FinanceWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinanceWallet"
    objects: {
      currency: Prisma.$CurrencyPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      monthReports: Prisma.$MonthReportPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      balance: number
      currencyId: string
      userId: string
    }, ExtArgs["result"]["financeWallet"]>
    composites: {}
  }

  type FinanceWalletGetPayload<S extends boolean | null | undefined | FinanceWalletDefaultArgs> = $Result.GetResult<Prisma.$FinanceWalletPayload, S>

  type FinanceWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinanceWalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinanceWalletCountAggregateInputType | true
    }

  export interface FinanceWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinanceWallet'], meta: { name: 'FinanceWallet' } }
    /**
     * Find zero or one FinanceWallet that matches the filter.
     * @param {FinanceWalletFindUniqueArgs} args - Arguments to find a FinanceWallet
     * @example
     * // Get one FinanceWallet
     * const financeWallet = await prisma.financeWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinanceWalletFindUniqueArgs>(args: SelectSubset<T, FinanceWalletFindUniqueArgs<ExtArgs>>): Prisma__FinanceWalletClient<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinanceWallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinanceWalletFindUniqueOrThrowArgs} args - Arguments to find a FinanceWallet
     * @example
     * // Get one FinanceWallet
     * const financeWallet = await prisma.financeWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinanceWalletFindUniqueOrThrowArgs>(args: SelectSubset<T, FinanceWalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinanceWalletClient<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinanceWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceWalletFindFirstArgs} args - Arguments to find a FinanceWallet
     * @example
     * // Get one FinanceWallet
     * const financeWallet = await prisma.financeWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinanceWalletFindFirstArgs>(args?: SelectSubset<T, FinanceWalletFindFirstArgs<ExtArgs>>): Prisma__FinanceWalletClient<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinanceWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceWalletFindFirstOrThrowArgs} args - Arguments to find a FinanceWallet
     * @example
     * // Get one FinanceWallet
     * const financeWallet = await prisma.financeWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinanceWalletFindFirstOrThrowArgs>(args?: SelectSubset<T, FinanceWalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinanceWalletClient<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinanceWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinanceWallets
     * const financeWallets = await prisma.financeWallet.findMany()
     * 
     * // Get first 10 FinanceWallets
     * const financeWallets = await prisma.financeWallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financeWalletWithIdOnly = await prisma.financeWallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinanceWalletFindManyArgs>(args?: SelectSubset<T, FinanceWalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinanceWallet.
     * @param {FinanceWalletCreateArgs} args - Arguments to create a FinanceWallet.
     * @example
     * // Create one FinanceWallet
     * const FinanceWallet = await prisma.financeWallet.create({
     *   data: {
     *     // ... data to create a FinanceWallet
     *   }
     * })
     * 
     */
    create<T extends FinanceWalletCreateArgs>(args: SelectSubset<T, FinanceWalletCreateArgs<ExtArgs>>): Prisma__FinanceWalletClient<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinanceWallets.
     * @param {FinanceWalletCreateManyArgs} args - Arguments to create many FinanceWallets.
     * @example
     * // Create many FinanceWallets
     * const financeWallet = await prisma.financeWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinanceWalletCreateManyArgs>(args?: SelectSubset<T, FinanceWalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinanceWallets and returns the data saved in the database.
     * @param {FinanceWalletCreateManyAndReturnArgs} args - Arguments to create many FinanceWallets.
     * @example
     * // Create many FinanceWallets
     * const financeWallet = await prisma.financeWallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinanceWallets and only return the `id`
     * const financeWalletWithIdOnly = await prisma.financeWallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinanceWalletCreateManyAndReturnArgs>(args?: SelectSubset<T, FinanceWalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinanceWallet.
     * @param {FinanceWalletDeleteArgs} args - Arguments to delete one FinanceWallet.
     * @example
     * // Delete one FinanceWallet
     * const FinanceWallet = await prisma.financeWallet.delete({
     *   where: {
     *     // ... filter to delete one FinanceWallet
     *   }
     * })
     * 
     */
    delete<T extends FinanceWalletDeleteArgs>(args: SelectSubset<T, FinanceWalletDeleteArgs<ExtArgs>>): Prisma__FinanceWalletClient<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinanceWallet.
     * @param {FinanceWalletUpdateArgs} args - Arguments to update one FinanceWallet.
     * @example
     * // Update one FinanceWallet
     * const financeWallet = await prisma.financeWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinanceWalletUpdateArgs>(args: SelectSubset<T, FinanceWalletUpdateArgs<ExtArgs>>): Prisma__FinanceWalletClient<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinanceWallets.
     * @param {FinanceWalletDeleteManyArgs} args - Arguments to filter FinanceWallets to delete.
     * @example
     * // Delete a few FinanceWallets
     * const { count } = await prisma.financeWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinanceWalletDeleteManyArgs>(args?: SelectSubset<T, FinanceWalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinanceWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinanceWallets
     * const financeWallet = await prisma.financeWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinanceWalletUpdateManyArgs>(args: SelectSubset<T, FinanceWalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinanceWallets and returns the data updated in the database.
     * @param {FinanceWalletUpdateManyAndReturnArgs} args - Arguments to update many FinanceWallets.
     * @example
     * // Update many FinanceWallets
     * const financeWallet = await prisma.financeWallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinanceWallets and only return the `id`
     * const financeWalletWithIdOnly = await prisma.financeWallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinanceWalletUpdateManyAndReturnArgs>(args: SelectSubset<T, FinanceWalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinanceWallet.
     * @param {FinanceWalletUpsertArgs} args - Arguments to update or create a FinanceWallet.
     * @example
     * // Update or create a FinanceWallet
     * const financeWallet = await prisma.financeWallet.upsert({
     *   create: {
     *     // ... data to create a FinanceWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinanceWallet we want to update
     *   }
     * })
     */
    upsert<T extends FinanceWalletUpsertArgs>(args: SelectSubset<T, FinanceWalletUpsertArgs<ExtArgs>>): Prisma__FinanceWalletClient<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinanceWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceWalletCountArgs} args - Arguments to filter FinanceWallets to count.
     * @example
     * // Count the number of FinanceWallets
     * const count = await prisma.financeWallet.count({
     *   where: {
     *     // ... the filter for the FinanceWallets we want to count
     *   }
     * })
    **/
    count<T extends FinanceWalletCountArgs>(
      args?: Subset<T, FinanceWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinanceWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinanceWalletAggregateArgs>(args: Subset<T, FinanceWalletAggregateArgs>): Prisma.PrismaPromise<GetFinanceWalletAggregateType<T>>

    /**
     * Group by FinanceWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceWalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinanceWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceWalletGroupByArgs['orderBy'] }
        : { orderBy?: FinanceWalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinanceWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinanceWallet model
   */
  readonly fields: FinanceWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinanceWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    currency<T extends CurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurrencyDefaultArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends FinanceWallet$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, FinanceWallet$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthReports<T extends FinanceWallet$monthReportsArgs<ExtArgs> = {}>(args?: Subset<T, FinanceWallet$monthReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinanceWallet model
   */
  interface FinanceWalletFieldRefs {
    readonly id: FieldRef<"FinanceWallet", 'String'>
    readonly name: FieldRef<"FinanceWallet", 'String'>
    readonly balance: FieldRef<"FinanceWallet", 'Float'>
    readonly currencyId: FieldRef<"FinanceWallet", 'String'>
    readonly userId: FieldRef<"FinanceWallet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FinanceWallet findUnique
   */
  export type FinanceWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWallet
     */
    select?: FinanceWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceWallet
     */
    omit?: FinanceWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceWalletInclude<ExtArgs> | null
    /**
     * Filter, which FinanceWallet to fetch.
     */
    where: FinanceWalletWhereUniqueInput
  }

  /**
   * FinanceWallet findUniqueOrThrow
   */
  export type FinanceWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWallet
     */
    select?: FinanceWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceWallet
     */
    omit?: FinanceWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceWalletInclude<ExtArgs> | null
    /**
     * Filter, which FinanceWallet to fetch.
     */
    where: FinanceWalletWhereUniqueInput
  }

  /**
   * FinanceWallet findFirst
   */
  export type FinanceWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWallet
     */
    select?: FinanceWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceWallet
     */
    omit?: FinanceWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceWalletInclude<ExtArgs> | null
    /**
     * Filter, which FinanceWallet to fetch.
     */
    where?: FinanceWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceWallets to fetch.
     */
    orderBy?: FinanceWalletOrderByWithRelationInput | FinanceWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinanceWallets.
     */
    cursor?: FinanceWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceWallets.
     */
    distinct?: FinanceWalletScalarFieldEnum | FinanceWalletScalarFieldEnum[]
  }

  /**
   * FinanceWallet findFirstOrThrow
   */
  export type FinanceWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWallet
     */
    select?: FinanceWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceWallet
     */
    omit?: FinanceWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceWalletInclude<ExtArgs> | null
    /**
     * Filter, which FinanceWallet to fetch.
     */
    where?: FinanceWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceWallets to fetch.
     */
    orderBy?: FinanceWalletOrderByWithRelationInput | FinanceWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinanceWallets.
     */
    cursor?: FinanceWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceWallets.
     */
    distinct?: FinanceWalletScalarFieldEnum | FinanceWalletScalarFieldEnum[]
  }

  /**
   * FinanceWallet findMany
   */
  export type FinanceWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWallet
     */
    select?: FinanceWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceWallet
     */
    omit?: FinanceWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceWalletInclude<ExtArgs> | null
    /**
     * Filter, which FinanceWallets to fetch.
     */
    where?: FinanceWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceWallets to fetch.
     */
    orderBy?: FinanceWalletOrderByWithRelationInput | FinanceWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinanceWallets.
     */
    cursor?: FinanceWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceWallets.
     */
    skip?: number
    distinct?: FinanceWalletScalarFieldEnum | FinanceWalletScalarFieldEnum[]
  }

  /**
   * FinanceWallet create
   */
  export type FinanceWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWallet
     */
    select?: FinanceWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceWallet
     */
    omit?: FinanceWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceWalletInclude<ExtArgs> | null
    /**
     * The data needed to create a FinanceWallet.
     */
    data: XOR<FinanceWalletCreateInput, FinanceWalletUncheckedCreateInput>
  }

  /**
   * FinanceWallet createMany
   */
  export type FinanceWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinanceWallets.
     */
    data: FinanceWalletCreateManyInput | FinanceWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinanceWallet createManyAndReturn
   */
  export type FinanceWalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWallet
     */
    select?: FinanceWalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceWallet
     */
    omit?: FinanceWalletOmit<ExtArgs> | null
    /**
     * The data used to create many FinanceWallets.
     */
    data: FinanceWalletCreateManyInput | FinanceWalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceWalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinanceWallet update
   */
  export type FinanceWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWallet
     */
    select?: FinanceWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceWallet
     */
    omit?: FinanceWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceWalletInclude<ExtArgs> | null
    /**
     * The data needed to update a FinanceWallet.
     */
    data: XOR<FinanceWalletUpdateInput, FinanceWalletUncheckedUpdateInput>
    /**
     * Choose, which FinanceWallet to update.
     */
    where: FinanceWalletWhereUniqueInput
  }

  /**
   * FinanceWallet updateMany
   */
  export type FinanceWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinanceWallets.
     */
    data: XOR<FinanceWalletUpdateManyMutationInput, FinanceWalletUncheckedUpdateManyInput>
    /**
     * Filter which FinanceWallets to update
     */
    where?: FinanceWalletWhereInput
    /**
     * Limit how many FinanceWallets to update.
     */
    limit?: number
  }

  /**
   * FinanceWallet updateManyAndReturn
   */
  export type FinanceWalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWallet
     */
    select?: FinanceWalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceWallet
     */
    omit?: FinanceWalletOmit<ExtArgs> | null
    /**
     * The data used to update FinanceWallets.
     */
    data: XOR<FinanceWalletUpdateManyMutationInput, FinanceWalletUncheckedUpdateManyInput>
    /**
     * Filter which FinanceWallets to update
     */
    where?: FinanceWalletWhereInput
    /**
     * Limit how many FinanceWallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceWalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinanceWallet upsert
   */
  export type FinanceWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWallet
     */
    select?: FinanceWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceWallet
     */
    omit?: FinanceWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceWalletInclude<ExtArgs> | null
    /**
     * The filter to search for the FinanceWallet to update in case it exists.
     */
    where: FinanceWalletWhereUniqueInput
    /**
     * In case the FinanceWallet found by the `where` argument doesn't exist, create a new FinanceWallet with this data.
     */
    create: XOR<FinanceWalletCreateInput, FinanceWalletUncheckedCreateInput>
    /**
     * In case the FinanceWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceWalletUpdateInput, FinanceWalletUncheckedUpdateInput>
  }

  /**
   * FinanceWallet delete
   */
  export type FinanceWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWallet
     */
    select?: FinanceWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceWallet
     */
    omit?: FinanceWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceWalletInclude<ExtArgs> | null
    /**
     * Filter which FinanceWallet to delete.
     */
    where: FinanceWalletWhereUniqueInput
  }

  /**
   * FinanceWallet deleteMany
   */
  export type FinanceWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinanceWallets to delete
     */
    where?: FinanceWalletWhereInput
    /**
     * Limit how many FinanceWallets to delete.
     */
    limit?: number
  }

  /**
   * FinanceWallet.transactions
   */
  export type FinanceWallet$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * FinanceWallet.monthReports
   */
  export type FinanceWallet$monthReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthReport
     */
    select?: MonthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthReport
     */
    omit?: MonthReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthReportInclude<ExtArgs> | null
    where?: MonthReportWhereInput
    orderBy?: MonthReportOrderByWithRelationInput | MonthReportOrderByWithRelationInput[]
    cursor?: MonthReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthReportScalarFieldEnum | MonthReportScalarFieldEnum[]
  }

  /**
   * FinanceWallet without action
   */
  export type FinanceWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceWallet
     */
    select?: FinanceWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceWallet
     */
    omit?: FinanceWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceWalletInclude<ExtArgs> | null
  }


  /**
   * Model MonthReport
   */

  export type AggregateMonthReport = {
    _count: MonthReportCountAggregateOutputType | null
    _avg: MonthReportAvgAggregateOutputType | null
    _sum: MonthReportSumAggregateOutputType | null
    _min: MonthReportMinAggregateOutputType | null
    _max: MonthReportMaxAggregateOutputType | null
  }

  export type MonthReportAvgAggregateOutputType = {
    month: number | null
    year: number | null
    monthBalance: number | null
  }

  export type MonthReportSumAggregateOutputType = {
    month: number | null
    year: number | null
    monthBalance: number | null
  }

  export type MonthReportMinAggregateOutputType = {
    id: string | null
    month: number | null
    year: number | null
    monthBalance: number | null
    walletId: string | null
  }

  export type MonthReportMaxAggregateOutputType = {
    id: string | null
    month: number | null
    year: number | null
    monthBalance: number | null
    walletId: string | null
  }

  export type MonthReportCountAggregateOutputType = {
    id: number
    month: number
    year: number
    monthBalance: number
    walletId: number
    _all: number
  }


  export type MonthReportAvgAggregateInputType = {
    month?: true
    year?: true
    monthBalance?: true
  }

  export type MonthReportSumAggregateInputType = {
    month?: true
    year?: true
    monthBalance?: true
  }

  export type MonthReportMinAggregateInputType = {
    id?: true
    month?: true
    year?: true
    monthBalance?: true
    walletId?: true
  }

  export type MonthReportMaxAggregateInputType = {
    id?: true
    month?: true
    year?: true
    monthBalance?: true
    walletId?: true
  }

  export type MonthReportCountAggregateInputType = {
    id?: true
    month?: true
    year?: true
    monthBalance?: true
    walletId?: true
    _all?: true
  }

  export type MonthReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthReport to aggregate.
     */
    where?: MonthReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthReports to fetch.
     */
    orderBy?: MonthReportOrderByWithRelationInput | MonthReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthReports
    **/
    _count?: true | MonthReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthReportMaxAggregateInputType
  }

  export type GetMonthReportAggregateType<T extends MonthReportAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthReport[P]>
      : GetScalarType<T[P], AggregateMonthReport[P]>
  }




  export type MonthReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthReportWhereInput
    orderBy?: MonthReportOrderByWithAggregationInput | MonthReportOrderByWithAggregationInput[]
    by: MonthReportScalarFieldEnum[] | MonthReportScalarFieldEnum
    having?: MonthReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthReportCountAggregateInputType | true
    _avg?: MonthReportAvgAggregateInputType
    _sum?: MonthReportSumAggregateInputType
    _min?: MonthReportMinAggregateInputType
    _max?: MonthReportMaxAggregateInputType
  }

  export type MonthReportGroupByOutputType = {
    id: string
    month: number
    year: number
    monthBalance: number
    walletId: string
    _count: MonthReportCountAggregateOutputType | null
    _avg: MonthReportAvgAggregateOutputType | null
    _sum: MonthReportSumAggregateOutputType | null
    _min: MonthReportMinAggregateOutputType | null
    _max: MonthReportMaxAggregateOutputType | null
  }

  type GetMonthReportGroupByPayload<T extends MonthReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthReportGroupByOutputType[P]>
            : GetScalarType<T[P], MonthReportGroupByOutputType[P]>
        }
      >
    >


  export type MonthReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    year?: boolean
    monthBalance?: boolean
    walletId?: boolean
    wallet?: boolean | FinanceWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthReport"]>

  export type MonthReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    year?: boolean
    monthBalance?: boolean
    walletId?: boolean
    wallet?: boolean | FinanceWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthReport"]>

  export type MonthReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    year?: boolean
    monthBalance?: boolean
    walletId?: boolean
    wallet?: boolean | FinanceWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthReport"]>

  export type MonthReportSelectScalar = {
    id?: boolean
    month?: boolean
    year?: boolean
    monthBalance?: boolean
    walletId?: boolean
  }

  export type MonthReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "month" | "year" | "monthBalance" | "walletId", ExtArgs["result"]["monthReport"]>
  export type MonthReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | FinanceWalletDefaultArgs<ExtArgs>
  }
  export type MonthReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | FinanceWalletDefaultArgs<ExtArgs>
  }
  export type MonthReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | FinanceWalletDefaultArgs<ExtArgs>
  }

  export type $MonthReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthReport"
    objects: {
      wallet: Prisma.$FinanceWalletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      month: number
      year: number
      monthBalance: number
      walletId: string
    }, ExtArgs["result"]["monthReport"]>
    composites: {}
  }

  type MonthReportGetPayload<S extends boolean | null | undefined | MonthReportDefaultArgs> = $Result.GetResult<Prisma.$MonthReportPayload, S>

  type MonthReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthReportCountAggregateInputType | true
    }

  export interface MonthReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthReport'], meta: { name: 'MonthReport' } }
    /**
     * Find zero or one MonthReport that matches the filter.
     * @param {MonthReportFindUniqueArgs} args - Arguments to find a MonthReport
     * @example
     * // Get one MonthReport
     * const monthReport = await prisma.monthReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthReportFindUniqueArgs>(args: SelectSubset<T, MonthReportFindUniqueArgs<ExtArgs>>): Prisma__MonthReportClient<$Result.GetResult<Prisma.$MonthReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthReportFindUniqueOrThrowArgs} args - Arguments to find a MonthReport
     * @example
     * // Get one MonthReport
     * const monthReport = await prisma.monthReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthReportFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthReportClient<$Result.GetResult<Prisma.$MonthReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthReportFindFirstArgs} args - Arguments to find a MonthReport
     * @example
     * // Get one MonthReport
     * const monthReport = await prisma.monthReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthReportFindFirstArgs>(args?: SelectSubset<T, MonthReportFindFirstArgs<ExtArgs>>): Prisma__MonthReportClient<$Result.GetResult<Prisma.$MonthReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthReportFindFirstOrThrowArgs} args - Arguments to find a MonthReport
     * @example
     * // Get one MonthReport
     * const monthReport = await prisma.monthReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthReportFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthReportClient<$Result.GetResult<Prisma.$MonthReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthReports
     * const monthReports = await prisma.monthReport.findMany()
     * 
     * // Get first 10 MonthReports
     * const monthReports = await prisma.monthReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthReportWithIdOnly = await prisma.monthReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthReportFindManyArgs>(args?: SelectSubset<T, MonthReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthReport.
     * @param {MonthReportCreateArgs} args - Arguments to create a MonthReport.
     * @example
     * // Create one MonthReport
     * const MonthReport = await prisma.monthReport.create({
     *   data: {
     *     // ... data to create a MonthReport
     *   }
     * })
     * 
     */
    create<T extends MonthReportCreateArgs>(args: SelectSubset<T, MonthReportCreateArgs<ExtArgs>>): Prisma__MonthReportClient<$Result.GetResult<Prisma.$MonthReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthReports.
     * @param {MonthReportCreateManyArgs} args - Arguments to create many MonthReports.
     * @example
     * // Create many MonthReports
     * const monthReport = await prisma.monthReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthReportCreateManyArgs>(args?: SelectSubset<T, MonthReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthReports and returns the data saved in the database.
     * @param {MonthReportCreateManyAndReturnArgs} args - Arguments to create many MonthReports.
     * @example
     * // Create many MonthReports
     * const monthReport = await prisma.monthReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthReports and only return the `id`
     * const monthReportWithIdOnly = await prisma.monthReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthReportCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonthReport.
     * @param {MonthReportDeleteArgs} args - Arguments to delete one MonthReport.
     * @example
     * // Delete one MonthReport
     * const MonthReport = await prisma.monthReport.delete({
     *   where: {
     *     // ... filter to delete one MonthReport
     *   }
     * })
     * 
     */
    delete<T extends MonthReportDeleteArgs>(args: SelectSubset<T, MonthReportDeleteArgs<ExtArgs>>): Prisma__MonthReportClient<$Result.GetResult<Prisma.$MonthReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthReport.
     * @param {MonthReportUpdateArgs} args - Arguments to update one MonthReport.
     * @example
     * // Update one MonthReport
     * const monthReport = await prisma.monthReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthReportUpdateArgs>(args: SelectSubset<T, MonthReportUpdateArgs<ExtArgs>>): Prisma__MonthReportClient<$Result.GetResult<Prisma.$MonthReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthReports.
     * @param {MonthReportDeleteManyArgs} args - Arguments to filter MonthReports to delete.
     * @example
     * // Delete a few MonthReports
     * const { count } = await prisma.monthReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthReportDeleteManyArgs>(args?: SelectSubset<T, MonthReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthReports
     * const monthReport = await prisma.monthReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthReportUpdateManyArgs>(args: SelectSubset<T, MonthReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthReports and returns the data updated in the database.
     * @param {MonthReportUpdateManyAndReturnArgs} args - Arguments to update many MonthReports.
     * @example
     * // Update many MonthReports
     * const monthReport = await prisma.monthReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonthReports and only return the `id`
     * const monthReportWithIdOnly = await prisma.monthReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonthReportUpdateManyAndReturnArgs>(args: SelectSubset<T, MonthReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonthReport.
     * @param {MonthReportUpsertArgs} args - Arguments to update or create a MonthReport.
     * @example
     * // Update or create a MonthReport
     * const monthReport = await prisma.monthReport.upsert({
     *   create: {
     *     // ... data to create a MonthReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthReport we want to update
     *   }
     * })
     */
    upsert<T extends MonthReportUpsertArgs>(args: SelectSubset<T, MonthReportUpsertArgs<ExtArgs>>): Prisma__MonthReportClient<$Result.GetResult<Prisma.$MonthReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthReportCountArgs} args - Arguments to filter MonthReports to count.
     * @example
     * // Count the number of MonthReports
     * const count = await prisma.monthReport.count({
     *   where: {
     *     // ... the filter for the MonthReports we want to count
     *   }
     * })
    **/
    count<T extends MonthReportCountArgs>(
      args?: Subset<T, MonthReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthReportAggregateArgs>(args: Subset<T, MonthReportAggregateArgs>): Prisma.PrismaPromise<GetMonthReportAggregateType<T>>

    /**
     * Group by MonthReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthReportGroupByArgs['orderBy'] }
        : { orderBy?: MonthReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthReport model
   */
  readonly fields: MonthReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends FinanceWalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FinanceWalletDefaultArgs<ExtArgs>>): Prisma__FinanceWalletClient<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonthReport model
   */
  interface MonthReportFieldRefs {
    readonly id: FieldRef<"MonthReport", 'String'>
    readonly month: FieldRef<"MonthReport", 'Int'>
    readonly year: FieldRef<"MonthReport", 'Int'>
    readonly monthBalance: FieldRef<"MonthReport", 'Float'>
    readonly walletId: FieldRef<"MonthReport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MonthReport findUnique
   */
  export type MonthReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthReport
     */
    select?: MonthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthReport
     */
    omit?: MonthReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthReport to fetch.
     */
    where: MonthReportWhereUniqueInput
  }

  /**
   * MonthReport findUniqueOrThrow
   */
  export type MonthReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthReport
     */
    select?: MonthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthReport
     */
    omit?: MonthReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthReport to fetch.
     */
    where: MonthReportWhereUniqueInput
  }

  /**
   * MonthReport findFirst
   */
  export type MonthReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthReport
     */
    select?: MonthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthReport
     */
    omit?: MonthReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthReport to fetch.
     */
    where?: MonthReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthReports to fetch.
     */
    orderBy?: MonthReportOrderByWithRelationInput | MonthReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthReports.
     */
    cursor?: MonthReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthReports.
     */
    distinct?: MonthReportScalarFieldEnum | MonthReportScalarFieldEnum[]
  }

  /**
   * MonthReport findFirstOrThrow
   */
  export type MonthReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthReport
     */
    select?: MonthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthReport
     */
    omit?: MonthReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthReport to fetch.
     */
    where?: MonthReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthReports to fetch.
     */
    orderBy?: MonthReportOrderByWithRelationInput | MonthReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthReports.
     */
    cursor?: MonthReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthReports.
     */
    distinct?: MonthReportScalarFieldEnum | MonthReportScalarFieldEnum[]
  }

  /**
   * MonthReport findMany
   */
  export type MonthReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthReport
     */
    select?: MonthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthReport
     */
    omit?: MonthReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthReportInclude<ExtArgs> | null
    /**
     * Filter, which MonthReports to fetch.
     */
    where?: MonthReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthReports to fetch.
     */
    orderBy?: MonthReportOrderByWithRelationInput | MonthReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthReports.
     */
    cursor?: MonthReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthReports.
     */
    skip?: number
    distinct?: MonthReportScalarFieldEnum | MonthReportScalarFieldEnum[]
  }

  /**
   * MonthReport create
   */
  export type MonthReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthReport
     */
    select?: MonthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthReport
     */
    omit?: MonthReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthReportInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthReport.
     */
    data: XOR<MonthReportCreateInput, MonthReportUncheckedCreateInput>
  }

  /**
   * MonthReport createMany
   */
  export type MonthReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthReports.
     */
    data: MonthReportCreateManyInput | MonthReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthReport createManyAndReturn
   */
  export type MonthReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthReport
     */
    select?: MonthReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthReport
     */
    omit?: MonthReportOmit<ExtArgs> | null
    /**
     * The data used to create many MonthReports.
     */
    data: MonthReportCreateManyInput | MonthReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthReport update
   */
  export type MonthReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthReport
     */
    select?: MonthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthReport
     */
    omit?: MonthReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthReportInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthReport.
     */
    data: XOR<MonthReportUpdateInput, MonthReportUncheckedUpdateInput>
    /**
     * Choose, which MonthReport to update.
     */
    where: MonthReportWhereUniqueInput
  }

  /**
   * MonthReport updateMany
   */
  export type MonthReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthReports.
     */
    data: XOR<MonthReportUpdateManyMutationInput, MonthReportUncheckedUpdateManyInput>
    /**
     * Filter which MonthReports to update
     */
    where?: MonthReportWhereInput
    /**
     * Limit how many MonthReports to update.
     */
    limit?: number
  }

  /**
   * MonthReport updateManyAndReturn
   */
  export type MonthReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthReport
     */
    select?: MonthReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthReport
     */
    omit?: MonthReportOmit<ExtArgs> | null
    /**
     * The data used to update MonthReports.
     */
    data: XOR<MonthReportUpdateManyMutationInput, MonthReportUncheckedUpdateManyInput>
    /**
     * Filter which MonthReports to update
     */
    where?: MonthReportWhereInput
    /**
     * Limit how many MonthReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthReport upsert
   */
  export type MonthReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthReport
     */
    select?: MonthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthReport
     */
    omit?: MonthReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthReportInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthReport to update in case it exists.
     */
    where: MonthReportWhereUniqueInput
    /**
     * In case the MonthReport found by the `where` argument doesn't exist, create a new MonthReport with this data.
     */
    create: XOR<MonthReportCreateInput, MonthReportUncheckedCreateInput>
    /**
     * In case the MonthReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthReportUpdateInput, MonthReportUncheckedUpdateInput>
  }

  /**
   * MonthReport delete
   */
  export type MonthReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthReport
     */
    select?: MonthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthReport
     */
    omit?: MonthReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthReportInclude<ExtArgs> | null
    /**
     * Filter which MonthReport to delete.
     */
    where: MonthReportWhereUniqueInput
  }

  /**
   * MonthReport deleteMany
   */
  export type MonthReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthReports to delete
     */
    where?: MonthReportWhereInput
    /**
     * Limit how many MonthReports to delete.
     */
    limit?: number
  }

  /**
   * MonthReport without action
   */
  export type MonthReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthReport
     */
    select?: MonthReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthReport
     */
    omit?: MonthReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthReportInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    description: string | null
    amount: number | null
    date: Date | null
    type: $Enums.TransactionType | null
    status: $Enums.TransactionStatus | null
    walletId: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    description: string | null
    amount: number | null
    date: Date | null
    type: $Enums.TransactionType | null
    status: $Enums.TransactionStatus | null
    walletId: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    description: number
    amount: number
    date: number
    type: number
    status: number
    walletId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    date?: true
    type?: true
    status?: true
    walletId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    date?: true
    type?: true
    status?: true
    walletId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    date?: true
    type?: true
    status?: true
    walletId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    description: string
    amount: number
    date: Date
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    walletId: string
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    type?: boolean
    status?: boolean
    walletId?: boolean
    wallet?: boolean | FinanceWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    type?: boolean
    status?: boolean
    walletId?: boolean
    wallet?: boolean | FinanceWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    type?: boolean
    status?: boolean
    walletId?: boolean
    wallet?: boolean | FinanceWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    type?: boolean
    status?: boolean
    walletId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "amount" | "date" | "type" | "status" | "walletId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | FinanceWalletDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | FinanceWalletDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | FinanceWalletDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      wallet: Prisma.$FinanceWalletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      amount: number
      date: Date
      type: $Enums.TransactionType
      status: $Enums.TransactionStatus
      walletId: string
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends FinanceWalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FinanceWalletDefaultArgs<ExtArgs>>): Prisma__FinanceWalletClient<$Result.GetResult<Prisma.$FinanceWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly walletId: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    activatedAt: 'activatedAt',
    name: 'name',
    email: 'email',
    hash: 'hash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InvestmentWalletScalarFieldEnum: {
    id: 'id',
    name: 'name',
    currencyId: 'currencyId',
    userId: 'userId'
  };

  export type InvestmentWalletScalarFieldEnum = (typeof InvestmentWalletScalarFieldEnum)[keyof typeof InvestmentWalletScalarFieldEnum]


  export const InvestmentScalarFieldEnum: {
    id: 'id',
    ticker: 'ticker',
    category: 'category',
    quantity: 'quantity',
    currentPrice: 'currentPrice',
    walletId: 'walletId'
  };

  export type InvestmentScalarFieldEnum = (typeof InvestmentScalarFieldEnum)[keyof typeof InvestmentScalarFieldEnum]


  export const CurrencyScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    code: 'code'
  };

  export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum]


  export const FinanceWalletScalarFieldEnum: {
    id: 'id',
    name: 'name',
    balance: 'balance',
    currencyId: 'currencyId',
    userId: 'userId'
  };

  export type FinanceWalletScalarFieldEnum = (typeof FinanceWalletScalarFieldEnum)[keyof typeof FinanceWalletScalarFieldEnum]


  export const MonthReportScalarFieldEnum: {
    id: 'id',
    month: 'month',
    year: 'year',
    monthBalance: 'monthBalance',
    walletId: 'walletId'
  };

  export type MonthReportScalarFieldEnum = (typeof MonthReportScalarFieldEnum)[keyof typeof MonthReportScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    amount: 'amount',
    date: 'date',
    type: 'type',
    status: 'status',
    walletId: 'walletId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'InvestmentCategory'
   */
  export type EnumInvestmentCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvestmentCategory'>
    


  /**
   * Reference to a field of type 'InvestmentCategory[]'
   */
  export type ListEnumInvestmentCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvestmentCategory[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    activatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    financeWallets?: FinanceWalletListRelationFilter
    investmentWallets?: InvestmentWalletListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    activatedAt?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    financeWallets?: FinanceWalletOrderByRelationAggregateInput
    investmentWallets?: InvestmentWalletOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    activatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringFilter<"User"> | string
    hash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    financeWallets?: FinanceWalletListRelationFilter
    investmentWallets?: InvestmentWalletListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    activatedAt?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    activatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    hash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type InvestmentWalletWhereInput = {
    AND?: InvestmentWalletWhereInput | InvestmentWalletWhereInput[]
    OR?: InvestmentWalletWhereInput[]
    NOT?: InvestmentWalletWhereInput | InvestmentWalletWhereInput[]
    id?: StringFilter<"InvestmentWallet"> | string
    name?: StringFilter<"InvestmentWallet"> | string
    currencyId?: StringFilter<"InvestmentWallet"> | string
    userId?: StringFilter<"InvestmentWallet"> | string
    currency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
    investments?: InvestmentListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InvestmentWalletOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    currency?: CurrencyOrderByWithRelationInput
    investments?: InvestmentOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type InvestmentWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvestmentWalletWhereInput | InvestmentWalletWhereInput[]
    OR?: InvestmentWalletWhereInput[]
    NOT?: InvestmentWalletWhereInput | InvestmentWalletWhereInput[]
    name?: StringFilter<"InvestmentWallet"> | string
    currencyId?: StringFilter<"InvestmentWallet"> | string
    userId?: StringFilter<"InvestmentWallet"> | string
    currency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
    investments?: InvestmentListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InvestmentWalletOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    _count?: InvestmentWalletCountOrderByAggregateInput
    _max?: InvestmentWalletMaxOrderByAggregateInput
    _min?: InvestmentWalletMinOrderByAggregateInput
  }

  export type InvestmentWalletScalarWhereWithAggregatesInput = {
    AND?: InvestmentWalletScalarWhereWithAggregatesInput | InvestmentWalletScalarWhereWithAggregatesInput[]
    OR?: InvestmentWalletScalarWhereWithAggregatesInput[]
    NOT?: InvestmentWalletScalarWhereWithAggregatesInput | InvestmentWalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvestmentWallet"> | string
    name?: StringWithAggregatesFilter<"InvestmentWallet"> | string
    currencyId?: StringWithAggregatesFilter<"InvestmentWallet"> | string
    userId?: StringWithAggregatesFilter<"InvestmentWallet"> | string
  }

  export type InvestmentWhereInput = {
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    id?: StringFilter<"Investment"> | string
    ticker?: StringFilter<"Investment"> | string
    category?: EnumInvestmentCategoryFilter<"Investment"> | $Enums.InvestmentCategory
    quantity?: FloatFilter<"Investment"> | number
    currentPrice?: FloatFilter<"Investment"> | number
    walletId?: StringFilter<"Investment"> | string
    wallet?: XOR<InvestmentWalletScalarRelationFilter, InvestmentWalletWhereInput>
  }

  export type InvestmentOrderByWithRelationInput = {
    id?: SortOrder
    ticker?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    currentPrice?: SortOrder
    walletId?: SortOrder
    wallet?: InvestmentWalletOrderByWithRelationInput
  }

  export type InvestmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    ticker?: StringFilter<"Investment"> | string
    category?: EnumInvestmentCategoryFilter<"Investment"> | $Enums.InvestmentCategory
    quantity?: FloatFilter<"Investment"> | number
    currentPrice?: FloatFilter<"Investment"> | number
    walletId?: StringFilter<"Investment"> | string
    wallet?: XOR<InvestmentWalletScalarRelationFilter, InvestmentWalletWhereInput>
  }, "id">

  export type InvestmentOrderByWithAggregationInput = {
    id?: SortOrder
    ticker?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    currentPrice?: SortOrder
    walletId?: SortOrder
    _count?: InvestmentCountOrderByAggregateInput
    _avg?: InvestmentAvgOrderByAggregateInput
    _max?: InvestmentMaxOrderByAggregateInput
    _min?: InvestmentMinOrderByAggregateInput
    _sum?: InvestmentSumOrderByAggregateInput
  }

  export type InvestmentScalarWhereWithAggregatesInput = {
    AND?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    OR?: InvestmentScalarWhereWithAggregatesInput[]
    NOT?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investment"> | string
    ticker?: StringWithAggregatesFilter<"Investment"> | string
    category?: EnumInvestmentCategoryWithAggregatesFilter<"Investment"> | $Enums.InvestmentCategory
    quantity?: FloatWithAggregatesFilter<"Investment"> | number
    currentPrice?: FloatWithAggregatesFilter<"Investment"> | number
    walletId?: StringWithAggregatesFilter<"Investment"> | string
  }

  export type CurrencyWhereInput = {
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    id?: StringFilter<"Currency"> | string
    symbol?: StringFilter<"Currency"> | string
    code?: StringFilter<"Currency"> | string
    wallets?: InvestmentWalletListRelationFilter
    finances?: FinanceWalletListRelationFilter
  }

  export type CurrencyOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    code?: SortOrder
    wallets?: InvestmentWalletOrderByRelationAggregateInput
    finances?: FinanceWalletOrderByRelationAggregateInput
  }

  export type CurrencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    symbol?: StringFilter<"Currency"> | string
    wallets?: InvestmentWalletListRelationFilter
    finances?: FinanceWalletListRelationFilter
  }, "id" | "code">

  export type CurrencyOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    code?: SortOrder
    _count?: CurrencyCountOrderByAggregateInput
    _max?: CurrencyMaxOrderByAggregateInput
    _min?: CurrencyMinOrderByAggregateInput
  }

  export type CurrencyScalarWhereWithAggregatesInput = {
    AND?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    OR?: CurrencyScalarWhereWithAggregatesInput[]
    NOT?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Currency"> | string
    symbol?: StringWithAggregatesFilter<"Currency"> | string
    code?: StringWithAggregatesFilter<"Currency"> | string
  }

  export type FinanceWalletWhereInput = {
    AND?: FinanceWalletWhereInput | FinanceWalletWhereInput[]
    OR?: FinanceWalletWhereInput[]
    NOT?: FinanceWalletWhereInput | FinanceWalletWhereInput[]
    id?: StringFilter<"FinanceWallet"> | string
    name?: StringFilter<"FinanceWallet"> | string
    balance?: FloatFilter<"FinanceWallet"> | number
    currencyId?: StringFilter<"FinanceWallet"> | string
    userId?: StringFilter<"FinanceWallet"> | string
    currency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
    transactions?: TransactionListRelationFilter
    monthReports?: MonthReportListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FinanceWalletOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    currency?: CurrencyOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    monthReports?: MonthReportOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type FinanceWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinanceWalletWhereInput | FinanceWalletWhereInput[]
    OR?: FinanceWalletWhereInput[]
    NOT?: FinanceWalletWhereInput | FinanceWalletWhereInput[]
    name?: StringFilter<"FinanceWallet"> | string
    balance?: FloatFilter<"FinanceWallet"> | number
    currencyId?: StringFilter<"FinanceWallet"> | string
    userId?: StringFilter<"FinanceWallet"> | string
    currency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
    transactions?: TransactionListRelationFilter
    monthReports?: MonthReportListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FinanceWalletOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    _count?: FinanceWalletCountOrderByAggregateInput
    _avg?: FinanceWalletAvgOrderByAggregateInput
    _max?: FinanceWalletMaxOrderByAggregateInput
    _min?: FinanceWalletMinOrderByAggregateInput
    _sum?: FinanceWalletSumOrderByAggregateInput
  }

  export type FinanceWalletScalarWhereWithAggregatesInput = {
    AND?: FinanceWalletScalarWhereWithAggregatesInput | FinanceWalletScalarWhereWithAggregatesInput[]
    OR?: FinanceWalletScalarWhereWithAggregatesInput[]
    NOT?: FinanceWalletScalarWhereWithAggregatesInput | FinanceWalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinanceWallet"> | string
    name?: StringWithAggregatesFilter<"FinanceWallet"> | string
    balance?: FloatWithAggregatesFilter<"FinanceWallet"> | number
    currencyId?: StringWithAggregatesFilter<"FinanceWallet"> | string
    userId?: StringWithAggregatesFilter<"FinanceWallet"> | string
  }

  export type MonthReportWhereInput = {
    AND?: MonthReportWhereInput | MonthReportWhereInput[]
    OR?: MonthReportWhereInput[]
    NOT?: MonthReportWhereInput | MonthReportWhereInput[]
    id?: StringFilter<"MonthReport"> | string
    month?: IntFilter<"MonthReport"> | number
    year?: IntFilter<"MonthReport"> | number
    monthBalance?: FloatFilter<"MonthReport"> | number
    walletId?: StringFilter<"MonthReport"> | string
    wallet?: XOR<FinanceWalletScalarRelationFilter, FinanceWalletWhereInput>
  }

  export type MonthReportOrderByWithRelationInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    monthBalance?: SortOrder
    walletId?: SortOrder
    wallet?: FinanceWalletOrderByWithRelationInput
  }

  export type MonthReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonthReportWhereInput | MonthReportWhereInput[]
    OR?: MonthReportWhereInput[]
    NOT?: MonthReportWhereInput | MonthReportWhereInput[]
    month?: IntFilter<"MonthReport"> | number
    year?: IntFilter<"MonthReport"> | number
    monthBalance?: FloatFilter<"MonthReport"> | number
    walletId?: StringFilter<"MonthReport"> | string
    wallet?: XOR<FinanceWalletScalarRelationFilter, FinanceWalletWhereInput>
  }, "id">

  export type MonthReportOrderByWithAggregationInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    monthBalance?: SortOrder
    walletId?: SortOrder
    _count?: MonthReportCountOrderByAggregateInput
    _avg?: MonthReportAvgOrderByAggregateInput
    _max?: MonthReportMaxOrderByAggregateInput
    _min?: MonthReportMinOrderByAggregateInput
    _sum?: MonthReportSumOrderByAggregateInput
  }

  export type MonthReportScalarWhereWithAggregatesInput = {
    AND?: MonthReportScalarWhereWithAggregatesInput | MonthReportScalarWhereWithAggregatesInput[]
    OR?: MonthReportScalarWhereWithAggregatesInput[]
    NOT?: MonthReportScalarWhereWithAggregatesInput | MonthReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthReport"> | string
    month?: IntWithAggregatesFilter<"MonthReport"> | number
    year?: IntWithAggregatesFilter<"MonthReport"> | number
    monthBalance?: FloatWithAggregatesFilter<"MonthReport"> | number
    walletId?: StringWithAggregatesFilter<"MonthReport"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    walletId?: StringFilter<"Transaction"> | string
    wallet?: XOR<FinanceWalletScalarRelationFilter, FinanceWalletWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    type?: SortOrder
    status?: SortOrder
    walletId?: SortOrder
    wallet?: FinanceWalletOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    description?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    walletId?: StringFilter<"Transaction"> | string
    wallet?: XOR<FinanceWalletScalarRelationFilter, FinanceWalletWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    type?: SortOrder
    status?: SortOrder
    walletId?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    description?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    walletId?: StringWithAggregatesFilter<"Transaction"> | string
  }

  export type UserCreateInput = {
    id?: string
    activatedAt?: Date | string | null
    name: string
    email: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    financeWallets?: FinanceWalletCreateNestedManyWithoutUserInput
    investmentWallets?: InvestmentWalletCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    activatedAt?: Date | string | null
    name: string
    email: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    financeWallets?: FinanceWalletUncheckedCreateNestedManyWithoutUserInput
    investmentWallets?: InvestmentWalletUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financeWallets?: FinanceWalletUpdateManyWithoutUserNestedInput
    investmentWallets?: InvestmentWalletUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financeWallets?: FinanceWalletUncheckedUpdateManyWithoutUserNestedInput
    investmentWallets?: InvestmentWalletUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    activatedAt?: Date | string | null
    name: string
    email: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentWalletCreateInput = {
    id?: string
    name: string
    currency: CurrencyCreateNestedOneWithoutWalletsInput
    investments?: InvestmentCreateNestedManyWithoutWalletInput
    user: UserCreateNestedOneWithoutInvestmentWalletsInput
  }

  export type InvestmentWalletUncheckedCreateInput = {
    id?: string
    name: string
    currencyId: string
    userId: string
    investments?: InvestmentUncheckedCreateNestedManyWithoutWalletInput
  }

  export type InvestmentWalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: CurrencyUpdateOneRequiredWithoutWalletsNestedInput
    investments?: InvestmentUpdateManyWithoutWalletNestedInput
    user?: UserUpdateOneRequiredWithoutInvestmentWalletsNestedInput
  }

  export type InvestmentWalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currencyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    investments?: InvestmentUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type InvestmentWalletCreateManyInput = {
    id?: string
    name: string
    currencyId: string
    userId: string
  }

  export type InvestmentWalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentWalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currencyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentCreateInput = {
    id?: string
    ticker: string
    category: $Enums.InvestmentCategory
    quantity: number
    currentPrice: number
    wallet: InvestmentWalletCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateInput = {
    id?: string
    ticker: string
    category: $Enums.InvestmentCategory
    quantity: number
    currentPrice: number
    walletId: string
  }

  export type InvestmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    category?: EnumInvestmentCategoryFieldUpdateOperationsInput | $Enums.InvestmentCategory
    quantity?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    wallet?: InvestmentWalletUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    category?: EnumInvestmentCategoryFieldUpdateOperationsInput | $Enums.InvestmentCategory
    quantity?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    walletId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentCreateManyInput = {
    id?: string
    ticker: string
    category: $Enums.InvestmentCategory
    quantity: number
    currentPrice: number
    walletId: string
  }

  export type InvestmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    category?: EnumInvestmentCategoryFieldUpdateOperationsInput | $Enums.InvestmentCategory
    quantity?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type InvestmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    category?: EnumInvestmentCategoryFieldUpdateOperationsInput | $Enums.InvestmentCategory
    quantity?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
    walletId?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyCreateInput = {
    id?: string
    symbol: string
    code: string
    wallets?: InvestmentWalletCreateNestedManyWithoutCurrencyInput
    finances?: FinanceWalletCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUncheckedCreateInput = {
    id?: string
    symbol: string
    code: string
    wallets?: InvestmentWalletUncheckedCreateNestedManyWithoutCurrencyInput
    finances?: FinanceWalletUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    wallets?: InvestmentWalletUpdateManyWithoutCurrencyNestedInput
    finances?: FinanceWalletUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    wallets?: InvestmentWalletUncheckedUpdateManyWithoutCurrencyNestedInput
    finances?: FinanceWalletUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyCreateManyInput = {
    id?: string
    symbol: string
    code: string
  }

  export type CurrencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type FinanceWalletCreateInput = {
    id?: string
    name: string
    balance: number
    currency: CurrencyCreateNestedOneWithoutFinancesInput
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    monthReports?: MonthReportCreateNestedManyWithoutWalletInput
    user: UserCreateNestedOneWithoutFinanceWalletsInput
  }

  export type FinanceWalletUncheckedCreateInput = {
    id?: string
    name: string
    balance: number
    currencyId: string
    userId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    monthReports?: MonthReportUncheckedCreateNestedManyWithoutWalletInput
  }

  export type FinanceWalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: CurrencyUpdateOneRequiredWithoutFinancesNestedInput
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    monthReports?: MonthReportUpdateManyWithoutWalletNestedInput
    user?: UserUpdateOneRequiredWithoutFinanceWalletsNestedInput
  }

  export type FinanceWalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currencyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    monthReports?: MonthReportUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type FinanceWalletCreateManyInput = {
    id?: string
    name: string
    balance: number
    currencyId: string
    userId: string
  }

  export type FinanceWalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type FinanceWalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currencyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MonthReportCreateInput = {
    id?: string
    month: number
    year: number
    monthBalance: number
    wallet: FinanceWalletCreateNestedOneWithoutMonthReportsInput
  }

  export type MonthReportUncheckedCreateInput = {
    id?: string
    month: number
    year: number
    monthBalance: number
    walletId: string
  }

  export type MonthReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    monthBalance?: FloatFieldUpdateOperationsInput | number
    wallet?: FinanceWalletUpdateOneRequiredWithoutMonthReportsNestedInput
  }

  export type MonthReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    monthBalance?: FloatFieldUpdateOperationsInput | number
    walletId?: StringFieldUpdateOperationsInput | string
  }

  export type MonthReportCreateManyInput = {
    id?: string
    month: number
    year: number
    monthBalance: number
    walletId: string
  }

  export type MonthReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    monthBalance?: FloatFieldUpdateOperationsInput | number
  }

  export type MonthReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    monthBalance?: FloatFieldUpdateOperationsInput | number
    walletId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    id?: string
    description: string
    amount: number
    date: Date | string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    wallet: FinanceWalletCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    description: string
    amount: number
    date: Date | string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    walletId: string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    wallet?: FinanceWalletUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    walletId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    description: string
    amount: number
    date: Date | string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    walletId: string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    walletId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FinanceWalletListRelationFilter = {
    every?: FinanceWalletWhereInput
    some?: FinanceWalletWhereInput
    none?: FinanceWalletWhereInput
  }

  export type InvestmentWalletListRelationFilter = {
    every?: InvestmentWalletWhereInput
    some?: InvestmentWalletWhereInput
    none?: InvestmentWalletWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FinanceWalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvestmentWalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    activatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    activatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    activatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CurrencyScalarRelationFilter = {
    is?: CurrencyWhereInput
    isNot?: CurrencyWhereInput
  }

  export type InvestmentListRelationFilter = {
    every?: InvestmentWhereInput
    some?: InvestmentWhereInput
    none?: InvestmentWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InvestmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvestmentWalletCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
  }

  export type InvestmentWalletMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
  }

  export type InvestmentWalletMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
  }

  export type EnumInvestmentCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentCategory | EnumInvestmentCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentCategory[] | ListEnumInvestmentCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentCategory[] | ListEnumInvestmentCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentCategoryFilter<$PrismaModel> | $Enums.InvestmentCategory
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type InvestmentWalletScalarRelationFilter = {
    is?: InvestmentWalletWhereInput
    isNot?: InvestmentWalletWhereInput
  }

  export type InvestmentCountOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    currentPrice?: SortOrder
    walletId?: SortOrder
  }

  export type InvestmentAvgOrderByAggregateInput = {
    quantity?: SortOrder
    currentPrice?: SortOrder
  }

  export type InvestmentMaxOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    currentPrice?: SortOrder
    walletId?: SortOrder
  }

  export type InvestmentMinOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    currentPrice?: SortOrder
    walletId?: SortOrder
  }

  export type InvestmentSumOrderByAggregateInput = {
    quantity?: SortOrder
    currentPrice?: SortOrder
  }

  export type EnumInvestmentCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentCategory | EnumInvestmentCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentCategory[] | ListEnumInvestmentCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentCategory[] | ListEnumInvestmentCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentCategoryWithAggregatesFilter<$PrismaModel> | $Enums.InvestmentCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvestmentCategoryFilter<$PrismaModel>
    _max?: NestedEnumInvestmentCategoryFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CurrencyCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    code?: SortOrder
  }

  export type CurrencyMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    code?: SortOrder
  }

  export type CurrencyMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    code?: SortOrder
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type MonthReportListRelationFilter = {
    every?: MonthReportWhereInput
    some?: MonthReportWhereInput
    none?: MonthReportWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonthReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinanceWalletCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
  }

  export type FinanceWalletAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type FinanceWalletMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
  }

  export type FinanceWalletMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
  }

  export type FinanceWalletSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FinanceWalletScalarRelationFilter = {
    is?: FinanceWalletWhereInput
    isNot?: FinanceWalletWhereInput
  }

  export type MonthReportCountOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    monthBalance?: SortOrder
    walletId?: SortOrder
  }

  export type MonthReportAvgOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
    monthBalance?: SortOrder
  }

  export type MonthReportMaxOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    monthBalance?: SortOrder
    walletId?: SortOrder
  }

  export type MonthReportMinOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    monthBalance?: SortOrder
    walletId?: SortOrder
  }

  export type MonthReportSumOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
    monthBalance?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    type?: SortOrder
    status?: SortOrder
    walletId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    type?: SortOrder
    status?: SortOrder
    walletId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    type?: SortOrder
    status?: SortOrder
    walletId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type FinanceWalletCreateNestedManyWithoutUserInput = {
    create?: XOR<FinanceWalletCreateWithoutUserInput, FinanceWalletUncheckedCreateWithoutUserInput> | FinanceWalletCreateWithoutUserInput[] | FinanceWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceWalletCreateOrConnectWithoutUserInput | FinanceWalletCreateOrConnectWithoutUserInput[]
    createMany?: FinanceWalletCreateManyUserInputEnvelope
    connect?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
  }

  export type InvestmentWalletCreateNestedManyWithoutUserInput = {
    create?: XOR<InvestmentWalletCreateWithoutUserInput, InvestmentWalletUncheckedCreateWithoutUserInput> | InvestmentWalletCreateWithoutUserInput[] | InvestmentWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentWalletCreateOrConnectWithoutUserInput | InvestmentWalletCreateOrConnectWithoutUserInput[]
    createMany?: InvestmentWalletCreateManyUserInputEnvelope
    connect?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
  }

  export type FinanceWalletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FinanceWalletCreateWithoutUserInput, FinanceWalletUncheckedCreateWithoutUserInput> | FinanceWalletCreateWithoutUserInput[] | FinanceWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceWalletCreateOrConnectWithoutUserInput | FinanceWalletCreateOrConnectWithoutUserInput[]
    createMany?: FinanceWalletCreateManyUserInputEnvelope
    connect?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
  }

  export type InvestmentWalletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvestmentWalletCreateWithoutUserInput, InvestmentWalletUncheckedCreateWithoutUserInput> | InvestmentWalletCreateWithoutUserInput[] | InvestmentWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentWalletCreateOrConnectWithoutUserInput | InvestmentWalletCreateOrConnectWithoutUserInput[]
    createMany?: InvestmentWalletCreateManyUserInputEnvelope
    connect?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FinanceWalletUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinanceWalletCreateWithoutUserInput, FinanceWalletUncheckedCreateWithoutUserInput> | FinanceWalletCreateWithoutUserInput[] | FinanceWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceWalletCreateOrConnectWithoutUserInput | FinanceWalletCreateOrConnectWithoutUserInput[]
    upsert?: FinanceWalletUpsertWithWhereUniqueWithoutUserInput | FinanceWalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinanceWalletCreateManyUserInputEnvelope
    set?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    disconnect?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    delete?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    connect?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    update?: FinanceWalletUpdateWithWhereUniqueWithoutUserInput | FinanceWalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinanceWalletUpdateManyWithWhereWithoutUserInput | FinanceWalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinanceWalletScalarWhereInput | FinanceWalletScalarWhereInput[]
  }

  export type InvestmentWalletUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvestmentWalletCreateWithoutUserInput, InvestmentWalletUncheckedCreateWithoutUserInput> | InvestmentWalletCreateWithoutUserInput[] | InvestmentWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentWalletCreateOrConnectWithoutUserInput | InvestmentWalletCreateOrConnectWithoutUserInput[]
    upsert?: InvestmentWalletUpsertWithWhereUniqueWithoutUserInput | InvestmentWalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvestmentWalletCreateManyUserInputEnvelope
    set?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    disconnect?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    delete?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    connect?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    update?: InvestmentWalletUpdateWithWhereUniqueWithoutUserInput | InvestmentWalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvestmentWalletUpdateManyWithWhereWithoutUserInput | InvestmentWalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvestmentWalletScalarWhereInput | InvestmentWalletScalarWhereInput[]
  }

  export type FinanceWalletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinanceWalletCreateWithoutUserInput, FinanceWalletUncheckedCreateWithoutUserInput> | FinanceWalletCreateWithoutUserInput[] | FinanceWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceWalletCreateOrConnectWithoutUserInput | FinanceWalletCreateOrConnectWithoutUserInput[]
    upsert?: FinanceWalletUpsertWithWhereUniqueWithoutUserInput | FinanceWalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinanceWalletCreateManyUserInputEnvelope
    set?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    disconnect?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    delete?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    connect?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    update?: FinanceWalletUpdateWithWhereUniqueWithoutUserInput | FinanceWalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinanceWalletUpdateManyWithWhereWithoutUserInput | FinanceWalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinanceWalletScalarWhereInput | FinanceWalletScalarWhereInput[]
  }

  export type InvestmentWalletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvestmentWalletCreateWithoutUserInput, InvestmentWalletUncheckedCreateWithoutUserInput> | InvestmentWalletCreateWithoutUserInput[] | InvestmentWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentWalletCreateOrConnectWithoutUserInput | InvestmentWalletCreateOrConnectWithoutUserInput[]
    upsert?: InvestmentWalletUpsertWithWhereUniqueWithoutUserInput | InvestmentWalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvestmentWalletCreateManyUserInputEnvelope
    set?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    disconnect?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    delete?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    connect?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    update?: InvestmentWalletUpdateWithWhereUniqueWithoutUserInput | InvestmentWalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvestmentWalletUpdateManyWithWhereWithoutUserInput | InvestmentWalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvestmentWalletScalarWhereInput | InvestmentWalletScalarWhereInput[]
  }

  export type CurrencyCreateNestedOneWithoutWalletsInput = {
    create?: XOR<CurrencyCreateWithoutWalletsInput, CurrencyUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutWalletsInput
    connect?: CurrencyWhereUniqueInput
  }

  export type InvestmentCreateNestedManyWithoutWalletInput = {
    create?: XOR<InvestmentCreateWithoutWalletInput, InvestmentUncheckedCreateWithoutWalletInput> | InvestmentCreateWithoutWalletInput[] | InvestmentUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutWalletInput | InvestmentCreateOrConnectWithoutWalletInput[]
    createMany?: InvestmentCreateManyWalletInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutInvestmentWalletsInput = {
    create?: XOR<UserCreateWithoutInvestmentWalletsInput, UserUncheckedCreateWithoutInvestmentWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentWalletsInput
    connect?: UserWhereUniqueInput
  }

  export type InvestmentUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<InvestmentCreateWithoutWalletInput, InvestmentUncheckedCreateWithoutWalletInput> | InvestmentCreateWithoutWalletInput[] | InvestmentUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutWalletInput | InvestmentCreateOrConnectWithoutWalletInput[]
    createMany?: InvestmentCreateManyWalletInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type CurrencyUpdateOneRequiredWithoutWalletsNestedInput = {
    create?: XOR<CurrencyCreateWithoutWalletsInput, CurrencyUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutWalletsInput
    upsert?: CurrencyUpsertWithoutWalletsInput
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutWalletsInput, CurrencyUpdateWithoutWalletsInput>, CurrencyUncheckedUpdateWithoutWalletsInput>
  }

  export type InvestmentUpdateManyWithoutWalletNestedInput = {
    create?: XOR<InvestmentCreateWithoutWalletInput, InvestmentUncheckedCreateWithoutWalletInput> | InvestmentCreateWithoutWalletInput[] | InvestmentUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutWalletInput | InvestmentCreateOrConnectWithoutWalletInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutWalletInput | InvestmentUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: InvestmentCreateManyWalletInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutWalletInput | InvestmentUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutWalletInput | InvestmentUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutInvestmentWalletsNestedInput = {
    create?: XOR<UserCreateWithoutInvestmentWalletsInput, UserUncheckedCreateWithoutInvestmentWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentWalletsInput
    upsert?: UserUpsertWithoutInvestmentWalletsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvestmentWalletsInput, UserUpdateWithoutInvestmentWalletsInput>, UserUncheckedUpdateWithoutInvestmentWalletsInput>
  }

  export type InvestmentUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<InvestmentCreateWithoutWalletInput, InvestmentUncheckedCreateWithoutWalletInput> | InvestmentCreateWithoutWalletInput[] | InvestmentUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutWalletInput | InvestmentCreateOrConnectWithoutWalletInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutWalletInput | InvestmentUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: InvestmentCreateManyWalletInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutWalletInput | InvestmentUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutWalletInput | InvestmentUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type InvestmentWalletCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<InvestmentWalletCreateWithoutInvestmentsInput, InvestmentWalletUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: InvestmentWalletCreateOrConnectWithoutInvestmentsInput
    connect?: InvestmentWalletWhereUniqueInput
  }

  export type EnumInvestmentCategoryFieldUpdateOperationsInput = {
    set?: $Enums.InvestmentCategory
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvestmentWalletUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<InvestmentWalletCreateWithoutInvestmentsInput, InvestmentWalletUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: InvestmentWalletCreateOrConnectWithoutInvestmentsInput
    upsert?: InvestmentWalletUpsertWithoutInvestmentsInput
    connect?: InvestmentWalletWhereUniqueInput
    update?: XOR<XOR<InvestmentWalletUpdateToOneWithWhereWithoutInvestmentsInput, InvestmentWalletUpdateWithoutInvestmentsInput>, InvestmentWalletUncheckedUpdateWithoutInvestmentsInput>
  }

  export type InvestmentWalletCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<InvestmentWalletCreateWithoutCurrencyInput, InvestmentWalletUncheckedCreateWithoutCurrencyInput> | InvestmentWalletCreateWithoutCurrencyInput[] | InvestmentWalletUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: InvestmentWalletCreateOrConnectWithoutCurrencyInput | InvestmentWalletCreateOrConnectWithoutCurrencyInput[]
    createMany?: InvestmentWalletCreateManyCurrencyInputEnvelope
    connect?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
  }

  export type FinanceWalletCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<FinanceWalletCreateWithoutCurrencyInput, FinanceWalletUncheckedCreateWithoutCurrencyInput> | FinanceWalletCreateWithoutCurrencyInput[] | FinanceWalletUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: FinanceWalletCreateOrConnectWithoutCurrencyInput | FinanceWalletCreateOrConnectWithoutCurrencyInput[]
    createMany?: FinanceWalletCreateManyCurrencyInputEnvelope
    connect?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
  }

  export type InvestmentWalletUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<InvestmentWalletCreateWithoutCurrencyInput, InvestmentWalletUncheckedCreateWithoutCurrencyInput> | InvestmentWalletCreateWithoutCurrencyInput[] | InvestmentWalletUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: InvestmentWalletCreateOrConnectWithoutCurrencyInput | InvestmentWalletCreateOrConnectWithoutCurrencyInput[]
    createMany?: InvestmentWalletCreateManyCurrencyInputEnvelope
    connect?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
  }

  export type FinanceWalletUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<FinanceWalletCreateWithoutCurrencyInput, FinanceWalletUncheckedCreateWithoutCurrencyInput> | FinanceWalletCreateWithoutCurrencyInput[] | FinanceWalletUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: FinanceWalletCreateOrConnectWithoutCurrencyInput | FinanceWalletCreateOrConnectWithoutCurrencyInput[]
    createMany?: FinanceWalletCreateManyCurrencyInputEnvelope
    connect?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
  }

  export type InvestmentWalletUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<InvestmentWalletCreateWithoutCurrencyInput, InvestmentWalletUncheckedCreateWithoutCurrencyInput> | InvestmentWalletCreateWithoutCurrencyInput[] | InvestmentWalletUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: InvestmentWalletCreateOrConnectWithoutCurrencyInput | InvestmentWalletCreateOrConnectWithoutCurrencyInput[]
    upsert?: InvestmentWalletUpsertWithWhereUniqueWithoutCurrencyInput | InvestmentWalletUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: InvestmentWalletCreateManyCurrencyInputEnvelope
    set?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    disconnect?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    delete?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    connect?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    update?: InvestmentWalletUpdateWithWhereUniqueWithoutCurrencyInput | InvestmentWalletUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: InvestmentWalletUpdateManyWithWhereWithoutCurrencyInput | InvestmentWalletUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: InvestmentWalletScalarWhereInput | InvestmentWalletScalarWhereInput[]
  }

  export type FinanceWalletUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<FinanceWalletCreateWithoutCurrencyInput, FinanceWalletUncheckedCreateWithoutCurrencyInput> | FinanceWalletCreateWithoutCurrencyInput[] | FinanceWalletUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: FinanceWalletCreateOrConnectWithoutCurrencyInput | FinanceWalletCreateOrConnectWithoutCurrencyInput[]
    upsert?: FinanceWalletUpsertWithWhereUniqueWithoutCurrencyInput | FinanceWalletUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: FinanceWalletCreateManyCurrencyInputEnvelope
    set?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    disconnect?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    delete?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    connect?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    update?: FinanceWalletUpdateWithWhereUniqueWithoutCurrencyInput | FinanceWalletUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: FinanceWalletUpdateManyWithWhereWithoutCurrencyInput | FinanceWalletUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: FinanceWalletScalarWhereInput | FinanceWalletScalarWhereInput[]
  }

  export type InvestmentWalletUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<InvestmentWalletCreateWithoutCurrencyInput, InvestmentWalletUncheckedCreateWithoutCurrencyInput> | InvestmentWalletCreateWithoutCurrencyInput[] | InvestmentWalletUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: InvestmentWalletCreateOrConnectWithoutCurrencyInput | InvestmentWalletCreateOrConnectWithoutCurrencyInput[]
    upsert?: InvestmentWalletUpsertWithWhereUniqueWithoutCurrencyInput | InvestmentWalletUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: InvestmentWalletCreateManyCurrencyInputEnvelope
    set?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    disconnect?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    delete?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    connect?: InvestmentWalletWhereUniqueInput | InvestmentWalletWhereUniqueInput[]
    update?: InvestmentWalletUpdateWithWhereUniqueWithoutCurrencyInput | InvestmentWalletUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: InvestmentWalletUpdateManyWithWhereWithoutCurrencyInput | InvestmentWalletUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: InvestmentWalletScalarWhereInput | InvestmentWalletScalarWhereInput[]
  }

  export type FinanceWalletUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<FinanceWalletCreateWithoutCurrencyInput, FinanceWalletUncheckedCreateWithoutCurrencyInput> | FinanceWalletCreateWithoutCurrencyInput[] | FinanceWalletUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: FinanceWalletCreateOrConnectWithoutCurrencyInput | FinanceWalletCreateOrConnectWithoutCurrencyInput[]
    upsert?: FinanceWalletUpsertWithWhereUniqueWithoutCurrencyInput | FinanceWalletUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: FinanceWalletCreateManyCurrencyInputEnvelope
    set?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    disconnect?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    delete?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    connect?: FinanceWalletWhereUniqueInput | FinanceWalletWhereUniqueInput[]
    update?: FinanceWalletUpdateWithWhereUniqueWithoutCurrencyInput | FinanceWalletUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: FinanceWalletUpdateManyWithWhereWithoutCurrencyInput | FinanceWalletUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: FinanceWalletScalarWhereInput | FinanceWalletScalarWhereInput[]
  }

  export type CurrencyCreateNestedOneWithoutFinancesInput = {
    create?: XOR<CurrencyCreateWithoutFinancesInput, CurrencyUncheckedCreateWithoutFinancesInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutFinancesInput
    connect?: CurrencyWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutWalletInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type MonthReportCreateNestedManyWithoutWalletInput = {
    create?: XOR<MonthReportCreateWithoutWalletInput, MonthReportUncheckedCreateWithoutWalletInput> | MonthReportCreateWithoutWalletInput[] | MonthReportUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: MonthReportCreateOrConnectWithoutWalletInput | MonthReportCreateOrConnectWithoutWalletInput[]
    createMany?: MonthReportCreateManyWalletInputEnvelope
    connect?: MonthReportWhereUniqueInput | MonthReportWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutFinanceWalletsInput = {
    create?: XOR<UserCreateWithoutFinanceWalletsInput, UserUncheckedCreateWithoutFinanceWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinanceWalletsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type MonthReportUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<MonthReportCreateWithoutWalletInput, MonthReportUncheckedCreateWithoutWalletInput> | MonthReportCreateWithoutWalletInput[] | MonthReportUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: MonthReportCreateOrConnectWithoutWalletInput | MonthReportCreateOrConnectWithoutWalletInput[]
    createMany?: MonthReportCreateManyWalletInputEnvelope
    connect?: MonthReportWhereUniqueInput | MonthReportWhereUniqueInput[]
  }

  export type CurrencyUpdateOneRequiredWithoutFinancesNestedInput = {
    create?: XOR<CurrencyCreateWithoutFinancesInput, CurrencyUncheckedCreateWithoutFinancesInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutFinancesInput
    upsert?: CurrencyUpsertWithoutFinancesInput
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutFinancesInput, CurrencyUpdateWithoutFinancesInput>, CurrencyUncheckedUpdateWithoutFinancesInput>
  }

  export type TransactionUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutWalletInput | TransactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutWalletInput | TransactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutWalletInput | TransactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type MonthReportUpdateManyWithoutWalletNestedInput = {
    create?: XOR<MonthReportCreateWithoutWalletInput, MonthReportUncheckedCreateWithoutWalletInput> | MonthReportCreateWithoutWalletInput[] | MonthReportUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: MonthReportCreateOrConnectWithoutWalletInput | MonthReportCreateOrConnectWithoutWalletInput[]
    upsert?: MonthReportUpsertWithWhereUniqueWithoutWalletInput | MonthReportUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: MonthReportCreateManyWalletInputEnvelope
    set?: MonthReportWhereUniqueInput | MonthReportWhereUniqueInput[]
    disconnect?: MonthReportWhereUniqueInput | MonthReportWhereUniqueInput[]
    delete?: MonthReportWhereUniqueInput | MonthReportWhereUniqueInput[]
    connect?: MonthReportWhereUniqueInput | MonthReportWhereUniqueInput[]
    update?: MonthReportUpdateWithWhereUniqueWithoutWalletInput | MonthReportUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: MonthReportUpdateManyWithWhereWithoutWalletInput | MonthReportUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: MonthReportScalarWhereInput | MonthReportScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutFinanceWalletsNestedInput = {
    create?: XOR<UserCreateWithoutFinanceWalletsInput, UserUncheckedCreateWithoutFinanceWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinanceWalletsInput
    upsert?: UserUpsertWithoutFinanceWalletsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinanceWalletsInput, UserUpdateWithoutFinanceWalletsInput>, UserUncheckedUpdateWithoutFinanceWalletsInput>
  }

  export type TransactionUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutWalletInput | TransactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutWalletInput | TransactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutWalletInput | TransactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type MonthReportUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<MonthReportCreateWithoutWalletInput, MonthReportUncheckedCreateWithoutWalletInput> | MonthReportCreateWithoutWalletInput[] | MonthReportUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: MonthReportCreateOrConnectWithoutWalletInput | MonthReportCreateOrConnectWithoutWalletInput[]
    upsert?: MonthReportUpsertWithWhereUniqueWithoutWalletInput | MonthReportUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: MonthReportCreateManyWalletInputEnvelope
    set?: MonthReportWhereUniqueInput | MonthReportWhereUniqueInput[]
    disconnect?: MonthReportWhereUniqueInput | MonthReportWhereUniqueInput[]
    delete?: MonthReportWhereUniqueInput | MonthReportWhereUniqueInput[]
    connect?: MonthReportWhereUniqueInput | MonthReportWhereUniqueInput[]
    update?: MonthReportUpdateWithWhereUniqueWithoutWalletInput | MonthReportUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: MonthReportUpdateManyWithWhereWithoutWalletInput | MonthReportUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: MonthReportScalarWhereInput | MonthReportScalarWhereInput[]
  }

  export type FinanceWalletCreateNestedOneWithoutMonthReportsInput = {
    create?: XOR<FinanceWalletCreateWithoutMonthReportsInput, FinanceWalletUncheckedCreateWithoutMonthReportsInput>
    connectOrCreate?: FinanceWalletCreateOrConnectWithoutMonthReportsInput
    connect?: FinanceWalletWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FinanceWalletUpdateOneRequiredWithoutMonthReportsNestedInput = {
    create?: XOR<FinanceWalletCreateWithoutMonthReportsInput, FinanceWalletUncheckedCreateWithoutMonthReportsInput>
    connectOrCreate?: FinanceWalletCreateOrConnectWithoutMonthReportsInput
    upsert?: FinanceWalletUpsertWithoutMonthReportsInput
    connect?: FinanceWalletWhereUniqueInput
    update?: XOR<XOR<FinanceWalletUpdateToOneWithWhereWithoutMonthReportsInput, FinanceWalletUpdateWithoutMonthReportsInput>, FinanceWalletUncheckedUpdateWithoutMonthReportsInput>
  }

  export type FinanceWalletCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<FinanceWalletCreateWithoutTransactionsInput, FinanceWalletUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FinanceWalletCreateOrConnectWithoutTransactionsInput
    connect?: FinanceWalletWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type FinanceWalletUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<FinanceWalletCreateWithoutTransactionsInput, FinanceWalletUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FinanceWalletCreateOrConnectWithoutTransactionsInput
    upsert?: FinanceWalletUpsertWithoutTransactionsInput
    connect?: FinanceWalletWhereUniqueInput
    update?: XOR<XOR<FinanceWalletUpdateToOneWithWhereWithoutTransactionsInput, FinanceWalletUpdateWithoutTransactionsInput>, FinanceWalletUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumInvestmentCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentCategory | EnumInvestmentCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentCategory[] | ListEnumInvestmentCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentCategory[] | ListEnumInvestmentCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentCategoryFilter<$PrismaModel> | $Enums.InvestmentCategory
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumInvestmentCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentCategory | EnumInvestmentCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentCategory[] | ListEnumInvestmentCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentCategory[] | ListEnumInvestmentCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentCategoryWithAggregatesFilter<$PrismaModel> | $Enums.InvestmentCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvestmentCategoryFilter<$PrismaModel>
    _max?: NestedEnumInvestmentCategoryFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type FinanceWalletCreateWithoutUserInput = {
    id?: string
    name: string
    balance: number
    currency: CurrencyCreateNestedOneWithoutFinancesInput
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    monthReports?: MonthReportCreateNestedManyWithoutWalletInput
  }

  export type FinanceWalletUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    balance: number
    currencyId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    monthReports?: MonthReportUncheckedCreateNestedManyWithoutWalletInput
  }

  export type FinanceWalletCreateOrConnectWithoutUserInput = {
    where: FinanceWalletWhereUniqueInput
    create: XOR<FinanceWalletCreateWithoutUserInput, FinanceWalletUncheckedCreateWithoutUserInput>
  }

  export type FinanceWalletCreateManyUserInputEnvelope = {
    data: FinanceWalletCreateManyUserInput | FinanceWalletCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvestmentWalletCreateWithoutUserInput = {
    id?: string
    name: string
    currency: CurrencyCreateNestedOneWithoutWalletsInput
    investments?: InvestmentCreateNestedManyWithoutWalletInput
  }

  export type InvestmentWalletUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    currencyId: string
    investments?: InvestmentUncheckedCreateNestedManyWithoutWalletInput
  }

  export type InvestmentWalletCreateOrConnectWithoutUserInput = {
    where: InvestmentWalletWhereUniqueInput
    create: XOR<InvestmentWalletCreateWithoutUserInput, InvestmentWalletUncheckedCreateWithoutUserInput>
  }

  export type InvestmentWalletCreateManyUserInputEnvelope = {
    data: InvestmentWalletCreateManyUserInput | InvestmentWalletCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FinanceWalletUpsertWithWhereUniqueWithoutUserInput = {
    where: FinanceWalletWhereUniqueInput
    update: XOR<FinanceWalletUpdateWithoutUserInput, FinanceWalletUncheckedUpdateWithoutUserInput>
    create: XOR<FinanceWalletCreateWithoutUserInput, FinanceWalletUncheckedCreateWithoutUserInput>
  }

  export type FinanceWalletUpdateWithWhereUniqueWithoutUserInput = {
    where: FinanceWalletWhereUniqueInput
    data: XOR<FinanceWalletUpdateWithoutUserInput, FinanceWalletUncheckedUpdateWithoutUserInput>
  }

  export type FinanceWalletUpdateManyWithWhereWithoutUserInput = {
    where: FinanceWalletScalarWhereInput
    data: XOR<FinanceWalletUpdateManyMutationInput, FinanceWalletUncheckedUpdateManyWithoutUserInput>
  }

  export type FinanceWalletScalarWhereInput = {
    AND?: FinanceWalletScalarWhereInput | FinanceWalletScalarWhereInput[]
    OR?: FinanceWalletScalarWhereInput[]
    NOT?: FinanceWalletScalarWhereInput | FinanceWalletScalarWhereInput[]
    id?: StringFilter<"FinanceWallet"> | string
    name?: StringFilter<"FinanceWallet"> | string
    balance?: FloatFilter<"FinanceWallet"> | number
    currencyId?: StringFilter<"FinanceWallet"> | string
    userId?: StringFilter<"FinanceWallet"> | string
  }

  export type InvestmentWalletUpsertWithWhereUniqueWithoutUserInput = {
    where: InvestmentWalletWhereUniqueInput
    update: XOR<InvestmentWalletUpdateWithoutUserInput, InvestmentWalletUncheckedUpdateWithoutUserInput>
    create: XOR<InvestmentWalletCreateWithoutUserInput, InvestmentWalletUncheckedCreateWithoutUserInput>
  }

  export type InvestmentWalletUpdateWithWhereUniqueWithoutUserInput = {
    where: InvestmentWalletWhereUniqueInput
    data: XOR<InvestmentWalletUpdateWithoutUserInput, InvestmentWalletUncheckedUpdateWithoutUserInput>
  }

  export type InvestmentWalletUpdateManyWithWhereWithoutUserInput = {
    where: InvestmentWalletScalarWhereInput
    data: XOR<InvestmentWalletUpdateManyMutationInput, InvestmentWalletUncheckedUpdateManyWithoutUserInput>
  }

  export type InvestmentWalletScalarWhereInput = {
    AND?: InvestmentWalletScalarWhereInput | InvestmentWalletScalarWhereInput[]
    OR?: InvestmentWalletScalarWhereInput[]
    NOT?: InvestmentWalletScalarWhereInput | InvestmentWalletScalarWhereInput[]
    id?: StringFilter<"InvestmentWallet"> | string
    name?: StringFilter<"InvestmentWallet"> | string
    currencyId?: StringFilter<"InvestmentWallet"> | string
    userId?: StringFilter<"InvestmentWallet"> | string
  }

  export type CurrencyCreateWithoutWalletsInput = {
    id?: string
    symbol: string
    code: string
    finances?: FinanceWalletCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUncheckedCreateWithoutWalletsInput = {
    id?: string
    symbol: string
    code: string
    finances?: FinanceWalletUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyCreateOrConnectWithoutWalletsInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutWalletsInput, CurrencyUncheckedCreateWithoutWalletsInput>
  }

  export type InvestmentCreateWithoutWalletInput = {
    id?: string
    ticker: string
    category: $Enums.InvestmentCategory
    quantity: number
    currentPrice: number
  }

  export type InvestmentUncheckedCreateWithoutWalletInput = {
    id?: string
    ticker: string
    category: $Enums.InvestmentCategory
    quantity: number
    currentPrice: number
  }

  export type InvestmentCreateOrConnectWithoutWalletInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutWalletInput, InvestmentUncheckedCreateWithoutWalletInput>
  }

  export type InvestmentCreateManyWalletInputEnvelope = {
    data: InvestmentCreateManyWalletInput | InvestmentCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutInvestmentWalletsInput = {
    id?: string
    activatedAt?: Date | string | null
    name: string
    email: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    financeWallets?: FinanceWalletCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvestmentWalletsInput = {
    id?: string
    activatedAt?: Date | string | null
    name: string
    email: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    financeWallets?: FinanceWalletUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvestmentWalletsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvestmentWalletsInput, UserUncheckedCreateWithoutInvestmentWalletsInput>
  }

  export type CurrencyUpsertWithoutWalletsInput = {
    update: XOR<CurrencyUpdateWithoutWalletsInput, CurrencyUncheckedUpdateWithoutWalletsInput>
    create: XOR<CurrencyCreateWithoutWalletsInput, CurrencyUncheckedCreateWithoutWalletsInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutWalletsInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutWalletsInput, CurrencyUncheckedUpdateWithoutWalletsInput>
  }

  export type CurrencyUpdateWithoutWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    finances?: FinanceWalletUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateWithoutWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    finances?: FinanceWalletUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type InvestmentUpsertWithWhereUniqueWithoutWalletInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutWalletInput, InvestmentUncheckedUpdateWithoutWalletInput>
    create: XOR<InvestmentCreateWithoutWalletInput, InvestmentUncheckedCreateWithoutWalletInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutWalletInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutWalletInput, InvestmentUncheckedUpdateWithoutWalletInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutWalletInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutWalletInput>
  }

  export type InvestmentScalarWhereInput = {
    AND?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    OR?: InvestmentScalarWhereInput[]
    NOT?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    id?: StringFilter<"Investment"> | string
    ticker?: StringFilter<"Investment"> | string
    category?: EnumInvestmentCategoryFilter<"Investment"> | $Enums.InvestmentCategory
    quantity?: FloatFilter<"Investment"> | number
    currentPrice?: FloatFilter<"Investment"> | number
    walletId?: StringFilter<"Investment"> | string
  }

  export type UserUpsertWithoutInvestmentWalletsInput = {
    update: XOR<UserUpdateWithoutInvestmentWalletsInput, UserUncheckedUpdateWithoutInvestmentWalletsInput>
    create: XOR<UserCreateWithoutInvestmentWalletsInput, UserUncheckedCreateWithoutInvestmentWalletsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvestmentWalletsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvestmentWalletsInput, UserUncheckedUpdateWithoutInvestmentWalletsInput>
  }

  export type UserUpdateWithoutInvestmentWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financeWallets?: FinanceWalletUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvestmentWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financeWallets?: FinanceWalletUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvestmentWalletCreateWithoutInvestmentsInput = {
    id?: string
    name: string
    currency: CurrencyCreateNestedOneWithoutWalletsInput
    user: UserCreateNestedOneWithoutInvestmentWalletsInput
  }

  export type InvestmentWalletUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    name: string
    currencyId: string
    userId: string
  }

  export type InvestmentWalletCreateOrConnectWithoutInvestmentsInput = {
    where: InvestmentWalletWhereUniqueInput
    create: XOR<InvestmentWalletCreateWithoutInvestmentsInput, InvestmentWalletUncheckedCreateWithoutInvestmentsInput>
  }

  export type InvestmentWalletUpsertWithoutInvestmentsInput = {
    update: XOR<InvestmentWalletUpdateWithoutInvestmentsInput, InvestmentWalletUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<InvestmentWalletCreateWithoutInvestmentsInput, InvestmentWalletUncheckedCreateWithoutInvestmentsInput>
    where?: InvestmentWalletWhereInput
  }

  export type InvestmentWalletUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: InvestmentWalletWhereInput
    data: XOR<InvestmentWalletUpdateWithoutInvestmentsInput, InvestmentWalletUncheckedUpdateWithoutInvestmentsInput>
  }

  export type InvestmentWalletUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: CurrencyUpdateOneRequiredWithoutWalletsNestedInput
    user?: UserUpdateOneRequiredWithoutInvestmentWalletsNestedInput
  }

  export type InvestmentWalletUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currencyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentWalletCreateWithoutCurrencyInput = {
    id?: string
    name: string
    investments?: InvestmentCreateNestedManyWithoutWalletInput
    user: UserCreateNestedOneWithoutInvestmentWalletsInput
  }

  export type InvestmentWalletUncheckedCreateWithoutCurrencyInput = {
    id?: string
    name: string
    userId: string
    investments?: InvestmentUncheckedCreateNestedManyWithoutWalletInput
  }

  export type InvestmentWalletCreateOrConnectWithoutCurrencyInput = {
    where: InvestmentWalletWhereUniqueInput
    create: XOR<InvestmentWalletCreateWithoutCurrencyInput, InvestmentWalletUncheckedCreateWithoutCurrencyInput>
  }

  export type InvestmentWalletCreateManyCurrencyInputEnvelope = {
    data: InvestmentWalletCreateManyCurrencyInput | InvestmentWalletCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type FinanceWalletCreateWithoutCurrencyInput = {
    id?: string
    name: string
    balance: number
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    monthReports?: MonthReportCreateNestedManyWithoutWalletInput
    user: UserCreateNestedOneWithoutFinanceWalletsInput
  }

  export type FinanceWalletUncheckedCreateWithoutCurrencyInput = {
    id?: string
    name: string
    balance: number
    userId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    monthReports?: MonthReportUncheckedCreateNestedManyWithoutWalletInput
  }

  export type FinanceWalletCreateOrConnectWithoutCurrencyInput = {
    where: FinanceWalletWhereUniqueInput
    create: XOR<FinanceWalletCreateWithoutCurrencyInput, FinanceWalletUncheckedCreateWithoutCurrencyInput>
  }

  export type FinanceWalletCreateManyCurrencyInputEnvelope = {
    data: FinanceWalletCreateManyCurrencyInput | FinanceWalletCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type InvestmentWalletUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: InvestmentWalletWhereUniqueInput
    update: XOR<InvestmentWalletUpdateWithoutCurrencyInput, InvestmentWalletUncheckedUpdateWithoutCurrencyInput>
    create: XOR<InvestmentWalletCreateWithoutCurrencyInput, InvestmentWalletUncheckedCreateWithoutCurrencyInput>
  }

  export type InvestmentWalletUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: InvestmentWalletWhereUniqueInput
    data: XOR<InvestmentWalletUpdateWithoutCurrencyInput, InvestmentWalletUncheckedUpdateWithoutCurrencyInput>
  }

  export type InvestmentWalletUpdateManyWithWhereWithoutCurrencyInput = {
    where: InvestmentWalletScalarWhereInput
    data: XOR<InvestmentWalletUpdateManyMutationInput, InvestmentWalletUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type FinanceWalletUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: FinanceWalletWhereUniqueInput
    update: XOR<FinanceWalletUpdateWithoutCurrencyInput, FinanceWalletUncheckedUpdateWithoutCurrencyInput>
    create: XOR<FinanceWalletCreateWithoutCurrencyInput, FinanceWalletUncheckedCreateWithoutCurrencyInput>
  }

  export type FinanceWalletUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: FinanceWalletWhereUniqueInput
    data: XOR<FinanceWalletUpdateWithoutCurrencyInput, FinanceWalletUncheckedUpdateWithoutCurrencyInput>
  }

  export type FinanceWalletUpdateManyWithWhereWithoutCurrencyInput = {
    where: FinanceWalletScalarWhereInput
    data: XOR<FinanceWalletUpdateManyMutationInput, FinanceWalletUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type CurrencyCreateWithoutFinancesInput = {
    id?: string
    symbol: string
    code: string
    wallets?: InvestmentWalletCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUncheckedCreateWithoutFinancesInput = {
    id?: string
    symbol: string
    code: string
    wallets?: InvestmentWalletUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyCreateOrConnectWithoutFinancesInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutFinancesInput, CurrencyUncheckedCreateWithoutFinancesInput>
  }

  export type TransactionCreateWithoutWalletInput = {
    id?: string
    description: string
    amount: number
    date: Date | string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
  }

  export type TransactionUncheckedCreateWithoutWalletInput = {
    id?: string
    description: string
    amount: number
    date: Date | string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
  }

  export type TransactionCreateOrConnectWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput>
  }

  export type TransactionCreateManyWalletInputEnvelope = {
    data: TransactionCreateManyWalletInput | TransactionCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type MonthReportCreateWithoutWalletInput = {
    id?: string
    month: number
    year: number
    monthBalance: number
  }

  export type MonthReportUncheckedCreateWithoutWalletInput = {
    id?: string
    month: number
    year: number
    monthBalance: number
  }

  export type MonthReportCreateOrConnectWithoutWalletInput = {
    where: MonthReportWhereUniqueInput
    create: XOR<MonthReportCreateWithoutWalletInput, MonthReportUncheckedCreateWithoutWalletInput>
  }

  export type MonthReportCreateManyWalletInputEnvelope = {
    data: MonthReportCreateManyWalletInput | MonthReportCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutFinanceWalletsInput = {
    id?: string
    activatedAt?: Date | string | null
    name: string
    email: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investmentWallets?: InvestmentWalletCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFinanceWalletsInput = {
    id?: string
    activatedAt?: Date | string | null
    name: string
    email: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    investmentWallets?: InvestmentWalletUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFinanceWalletsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinanceWalletsInput, UserUncheckedCreateWithoutFinanceWalletsInput>
  }

  export type CurrencyUpsertWithoutFinancesInput = {
    update: XOR<CurrencyUpdateWithoutFinancesInput, CurrencyUncheckedUpdateWithoutFinancesInput>
    create: XOR<CurrencyCreateWithoutFinancesInput, CurrencyUncheckedCreateWithoutFinancesInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutFinancesInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutFinancesInput, CurrencyUncheckedUpdateWithoutFinancesInput>
  }

  export type CurrencyUpdateWithoutFinancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    wallets?: InvestmentWalletUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateWithoutFinancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    wallets?: InvestmentWalletUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutWalletInput, TransactionUncheckedUpdateWithoutWalletInput>
    create: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutWalletInput, TransactionUncheckedUpdateWithoutWalletInput>
  }

  export type TransactionUpdateManyWithWhereWithoutWalletInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutWalletInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    walletId?: StringFilter<"Transaction"> | string
  }

  export type MonthReportUpsertWithWhereUniqueWithoutWalletInput = {
    where: MonthReportWhereUniqueInput
    update: XOR<MonthReportUpdateWithoutWalletInput, MonthReportUncheckedUpdateWithoutWalletInput>
    create: XOR<MonthReportCreateWithoutWalletInput, MonthReportUncheckedCreateWithoutWalletInput>
  }

  export type MonthReportUpdateWithWhereUniqueWithoutWalletInput = {
    where: MonthReportWhereUniqueInput
    data: XOR<MonthReportUpdateWithoutWalletInput, MonthReportUncheckedUpdateWithoutWalletInput>
  }

  export type MonthReportUpdateManyWithWhereWithoutWalletInput = {
    where: MonthReportScalarWhereInput
    data: XOR<MonthReportUpdateManyMutationInput, MonthReportUncheckedUpdateManyWithoutWalletInput>
  }

  export type MonthReportScalarWhereInput = {
    AND?: MonthReportScalarWhereInput | MonthReportScalarWhereInput[]
    OR?: MonthReportScalarWhereInput[]
    NOT?: MonthReportScalarWhereInput | MonthReportScalarWhereInput[]
    id?: StringFilter<"MonthReport"> | string
    month?: IntFilter<"MonthReport"> | number
    year?: IntFilter<"MonthReport"> | number
    monthBalance?: FloatFilter<"MonthReport"> | number
    walletId?: StringFilter<"MonthReport"> | string
  }

  export type UserUpsertWithoutFinanceWalletsInput = {
    update: XOR<UserUpdateWithoutFinanceWalletsInput, UserUncheckedUpdateWithoutFinanceWalletsInput>
    create: XOR<UserCreateWithoutFinanceWalletsInput, UserUncheckedCreateWithoutFinanceWalletsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinanceWalletsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinanceWalletsInput, UserUncheckedUpdateWithoutFinanceWalletsInput>
  }

  export type UserUpdateWithoutFinanceWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investmentWallets?: InvestmentWalletUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFinanceWalletsInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investmentWallets?: InvestmentWalletUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FinanceWalletCreateWithoutMonthReportsInput = {
    id?: string
    name: string
    balance: number
    currency: CurrencyCreateNestedOneWithoutFinancesInput
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    user: UserCreateNestedOneWithoutFinanceWalletsInput
  }

  export type FinanceWalletUncheckedCreateWithoutMonthReportsInput = {
    id?: string
    name: string
    balance: number
    currencyId: string
    userId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
  }

  export type FinanceWalletCreateOrConnectWithoutMonthReportsInput = {
    where: FinanceWalletWhereUniqueInput
    create: XOR<FinanceWalletCreateWithoutMonthReportsInput, FinanceWalletUncheckedCreateWithoutMonthReportsInput>
  }

  export type FinanceWalletUpsertWithoutMonthReportsInput = {
    update: XOR<FinanceWalletUpdateWithoutMonthReportsInput, FinanceWalletUncheckedUpdateWithoutMonthReportsInput>
    create: XOR<FinanceWalletCreateWithoutMonthReportsInput, FinanceWalletUncheckedCreateWithoutMonthReportsInput>
    where?: FinanceWalletWhereInput
  }

  export type FinanceWalletUpdateToOneWithWhereWithoutMonthReportsInput = {
    where?: FinanceWalletWhereInput
    data: XOR<FinanceWalletUpdateWithoutMonthReportsInput, FinanceWalletUncheckedUpdateWithoutMonthReportsInput>
  }

  export type FinanceWalletUpdateWithoutMonthReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: CurrencyUpdateOneRequiredWithoutFinancesNestedInput
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    user?: UserUpdateOneRequiredWithoutFinanceWalletsNestedInput
  }

  export type FinanceWalletUncheckedUpdateWithoutMonthReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currencyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type FinanceWalletCreateWithoutTransactionsInput = {
    id?: string
    name: string
    balance: number
    currency: CurrencyCreateNestedOneWithoutFinancesInput
    monthReports?: MonthReportCreateNestedManyWithoutWalletInput
    user: UserCreateNestedOneWithoutFinanceWalletsInput
  }

  export type FinanceWalletUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    balance: number
    currencyId: string
    userId: string
    monthReports?: MonthReportUncheckedCreateNestedManyWithoutWalletInput
  }

  export type FinanceWalletCreateOrConnectWithoutTransactionsInput = {
    where: FinanceWalletWhereUniqueInput
    create: XOR<FinanceWalletCreateWithoutTransactionsInput, FinanceWalletUncheckedCreateWithoutTransactionsInput>
  }

  export type FinanceWalletUpsertWithoutTransactionsInput = {
    update: XOR<FinanceWalletUpdateWithoutTransactionsInput, FinanceWalletUncheckedUpdateWithoutTransactionsInput>
    create: XOR<FinanceWalletCreateWithoutTransactionsInput, FinanceWalletUncheckedCreateWithoutTransactionsInput>
    where?: FinanceWalletWhereInput
  }

  export type FinanceWalletUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: FinanceWalletWhereInput
    data: XOR<FinanceWalletUpdateWithoutTransactionsInput, FinanceWalletUncheckedUpdateWithoutTransactionsInput>
  }

  export type FinanceWalletUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: CurrencyUpdateOneRequiredWithoutFinancesNestedInput
    monthReports?: MonthReportUpdateManyWithoutWalletNestedInput
    user?: UserUpdateOneRequiredWithoutFinanceWalletsNestedInput
  }

  export type FinanceWalletUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currencyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    monthReports?: MonthReportUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type FinanceWalletCreateManyUserInput = {
    id?: string
    name: string
    balance: number
    currencyId: string
  }

  export type InvestmentWalletCreateManyUserInput = {
    id?: string
    name: string
    currencyId: string
  }

  export type FinanceWalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: CurrencyUpdateOneRequiredWithoutFinancesNestedInput
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    monthReports?: MonthReportUpdateManyWithoutWalletNestedInput
  }

  export type FinanceWalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currencyId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    monthReports?: MonthReportUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type FinanceWalletUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currencyId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentWalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currency?: CurrencyUpdateOneRequiredWithoutWalletsNestedInput
    investments?: InvestmentUpdateManyWithoutWalletNestedInput
  }

  export type InvestmentWalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currencyId?: StringFieldUpdateOperationsInput | string
    investments?: InvestmentUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type InvestmentWalletUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currencyId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentCreateManyWalletInput = {
    id?: string
    ticker: string
    category: $Enums.InvestmentCategory
    quantity: number
    currentPrice: number
  }

  export type InvestmentUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    category?: EnumInvestmentCategoryFieldUpdateOperationsInput | $Enums.InvestmentCategory
    quantity?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type InvestmentUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    category?: EnumInvestmentCategoryFieldUpdateOperationsInput | $Enums.InvestmentCategory
    quantity?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type InvestmentUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticker?: StringFieldUpdateOperationsInput | string
    category?: EnumInvestmentCategoryFieldUpdateOperationsInput | $Enums.InvestmentCategory
    quantity?: FloatFieldUpdateOperationsInput | number
    currentPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type InvestmentWalletCreateManyCurrencyInput = {
    id?: string
    name: string
    userId: string
  }

  export type FinanceWalletCreateManyCurrencyInput = {
    id?: string
    name: string
    balance: number
    userId: string
  }

  export type InvestmentWalletUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    investments?: InvestmentUpdateManyWithoutWalletNestedInput
    user?: UserUpdateOneRequiredWithoutInvestmentWalletsNestedInput
  }

  export type InvestmentWalletUncheckedUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    investments?: InvestmentUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type InvestmentWalletUncheckedUpdateManyWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FinanceWalletUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    monthReports?: MonthReportUpdateManyWithoutWalletNestedInput
    user?: UserUpdateOneRequiredWithoutFinanceWalletsNestedInput
  }

  export type FinanceWalletUncheckedUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    monthReports?: MonthReportUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type FinanceWalletUncheckedUpdateManyWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyWalletInput = {
    id?: string
    description: string
    amount: number
    date: Date | string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
  }

  export type MonthReportCreateManyWalletInput = {
    id?: string
    month: number
    year: number
    monthBalance: number
  }

  export type TransactionUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type TransactionUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type TransactionUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type MonthReportUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    monthBalance?: FloatFieldUpdateOperationsInput | number
  }

  export type MonthReportUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    monthBalance?: FloatFieldUpdateOperationsInput | number
  }

  export type MonthReportUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    monthBalance?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}