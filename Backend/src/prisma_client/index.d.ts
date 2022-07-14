
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Users
 * 
 */
export type Users = {
  id: number
  createdAt: Date
  updatedAt: Date
  username: string
  email: string
  password: string
  picture: string
  centerSheetId: string
  googleCredential: string
}

/**
 * Model Activities
 * 
 */
export type Activities = {
  id: number
  name: string
  venue: string | null
  status: string | null
  startDate: Date | null
  endDate: Date | null
  detail: string | null
  photo: string | null
}

/**
 * Model EmployeeActivities
 * 
 */
export type EmployeeActivities = {
  id: number
  employeeId: number
  activityId: number
}

/**
 * Model Employees
 * 
 */
export type Employees = {
  id: number
  name: string
  email: string
  gender: Gender
  placeOfBirth: string
  dateOfBirth: Date
  marriageStatus: boolean
  photo: string | null
  address: string | null
  officeEmail: string | null
  officeEmailPassword: string | null
  status: string | null
  handphone: string | null
  startWork: Date
  endWork: Date | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model EmployeeTeams
 * 
 */
export type EmployeeTeams = {
  employeeId: number
  teamId: number
  code: string
  roleId: number
  id: number
}

/**
 * Model EmployeeSchools
 * 
 */
export type EmployeeSchools = {
  id: number
  graduateYear: number
  employeeId: number
  schoolId: number
}

/**
 * Model Schools
 * 
 */
export type Schools = {
  id: number
  name: string
  level: SchoolLevel
  address: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Teams
 * 
 */
export type Teams = {
  id: number
  name: string
  code: string
  address: string | null
  image: string | null
}

/**
 * Model EmployeeRoles
 * 
 */
export type EmployeeRoles = {
  id: number
  employeeId: number
  roleId: number
}

/**
 * Model Roles
 * 
 */
export type Roles = {
  id: number
  name: string
  detail: string
  createdAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const SchoolLevel: {
  tk: 'tk',
  sd: 'sd',
  smp: 'smp',
  sma: 'sma',
  ptn: 'ptn',
  pts: 'pts'
};

export type SchoolLevel = (typeof SchoolLevel)[keyof typeof SchoolLevel]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;

  /**
   * `prisma.activities`: Exposes CRUD operations for the **Activities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activities.findMany()
    * ```
    */
  get activities(): Prisma.ActivitiesDelegate<GlobalReject>;

  /**
   * `prisma.employeeActivities`: Exposes CRUD operations for the **EmployeeActivities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeActivities
    * const employeeActivities = await prisma.employeeActivities.findMany()
    * ```
    */
  get employeeActivities(): Prisma.EmployeeActivitiesDelegate<GlobalReject>;

  /**
   * `prisma.employees`: Exposes CRUD operations for the **Employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.EmployeesDelegate<GlobalReject>;

  /**
   * `prisma.employeeTeams`: Exposes CRUD operations for the **EmployeeTeams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeTeams
    * const employeeTeams = await prisma.employeeTeams.findMany()
    * ```
    */
  get employeeTeams(): Prisma.EmployeeTeamsDelegate<GlobalReject>;

  /**
   * `prisma.employeeSchools`: Exposes CRUD operations for the **EmployeeSchools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeSchools
    * const employeeSchools = await prisma.employeeSchools.findMany()
    * ```
    */
  get employeeSchools(): Prisma.EmployeeSchoolsDelegate<GlobalReject>;

  /**
   * `prisma.schools`: Exposes CRUD operations for the **Schools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.schools.findMany()
    * ```
    */
  get schools(): Prisma.SchoolsDelegate<GlobalReject>;

  /**
   * `prisma.teams`: Exposes CRUD operations for the **Teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.teams.findMany()
    * ```
    */
  get teams(): Prisma.TeamsDelegate<GlobalReject>;

  /**
   * `prisma.employeeRoles`: Exposes CRUD operations for the **EmployeeRoles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeRoles
    * const employeeRoles = await prisma.employeeRoles.findMany()
    * ```
    */
  get employeeRoles(): Prisma.EmployeeRolesDelegate<GlobalReject>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
   * Prisma Client JS version: 3.15.2
   * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Users: 'Users',
    Activities: 'Activities',
    EmployeeActivities: 'EmployeeActivities',
    Employees: 'Employees',
    EmployeeTeams: 'EmployeeTeams',
    EmployeeSchools: 'EmployeeSchools',
    Schools: 'Schools',
    Teams: 'Teams',
    EmployeeRoles: 'EmployeeRoles',
    Roles: 'Roles'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ActivitiesCountOutputType
   */


  export type ActivitiesCountOutputType = {
    employees: number
  }

  export type ActivitiesCountOutputTypeSelect = {
    employees?: boolean
  }

  export type ActivitiesCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ActivitiesCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ActivitiesCountOutputType
    : S extends undefined
    ? never
    : S extends ActivitiesCountOutputTypeArgs
    ?'include' extends U
    ? ActivitiesCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ActivitiesCountOutputType ? ActivitiesCountOutputType[P] : never
  } 
    : ActivitiesCountOutputType
  : ActivitiesCountOutputType




  // Custom InputTypes

  /**
   * ActivitiesCountOutputType without action
   */
  export type ActivitiesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ActivitiesCountOutputType
     * 
    **/
    select?: ActivitiesCountOutputTypeSelect | null
  }



  /**
   * Count Type EmployeesCountOutputType
   */


  export type EmployeesCountOutputType = {
    schools: number
    roles: number
    teams: number
    activities: number
  }

  export type EmployeesCountOutputTypeSelect = {
    schools?: boolean
    roles?: boolean
    teams?: boolean
    activities?: boolean
  }

  export type EmployeesCountOutputTypeGetPayload<
    S extends boolean | null | undefined | EmployeesCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? EmployeesCountOutputType
    : S extends undefined
    ? never
    : S extends EmployeesCountOutputTypeArgs
    ?'include' extends U
    ? EmployeesCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof EmployeesCountOutputType ? EmployeesCountOutputType[P] : never
  } 
    : EmployeesCountOutputType
  : EmployeesCountOutputType




  // Custom InputTypes

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EmployeesCountOutputType
     * 
    **/
    select?: EmployeesCountOutputTypeSelect | null
  }



  /**
   * Count Type SchoolsCountOutputType
   */


  export type SchoolsCountOutputType = {
    employees: number
  }

  export type SchoolsCountOutputTypeSelect = {
    employees?: boolean
  }

  export type SchoolsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SchoolsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SchoolsCountOutputType
    : S extends undefined
    ? never
    : S extends SchoolsCountOutputTypeArgs
    ?'include' extends U
    ? SchoolsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SchoolsCountOutputType ? SchoolsCountOutputType[P] : never
  } 
    : SchoolsCountOutputType
  : SchoolsCountOutputType




  // Custom InputTypes

  /**
   * SchoolsCountOutputType without action
   */
  export type SchoolsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SchoolsCountOutputType
     * 
    **/
    select?: SchoolsCountOutputTypeSelect | null
  }



  /**
   * Count Type TeamsCountOutputType
   */


  export type TeamsCountOutputType = {
    employees: number
  }

  export type TeamsCountOutputTypeSelect = {
    employees?: boolean
  }

  export type TeamsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TeamsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TeamsCountOutputType
    : S extends undefined
    ? never
    : S extends TeamsCountOutputTypeArgs
    ?'include' extends U
    ? TeamsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TeamsCountOutputType ? TeamsCountOutputType[P] : never
  } 
    : TeamsCountOutputType
  : TeamsCountOutputType




  // Custom InputTypes

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TeamsCountOutputType
     * 
    **/
    select?: TeamsCountOutputTypeSelect | null
  }



  /**
   * Count Type RolesCountOutputType
   */


  export type RolesCountOutputType = {
    employees: number
    team: number
  }

  export type RolesCountOutputTypeSelect = {
    employees?: boolean
    team?: boolean
  }

  export type RolesCountOutputTypeGetPayload<
    S extends boolean | null | undefined | RolesCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? RolesCountOutputType
    : S extends undefined
    ? never
    : S extends RolesCountOutputTypeArgs
    ?'include' extends U
    ? RolesCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof RolesCountOutputType ? RolesCountOutputType[P] : never
  } 
    : RolesCountOutputType
  : RolesCountOutputType




  // Custom InputTypes

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     * 
    **/
    select?: RolesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    email: string | null
    password: string | null
    picture: string | null
    centerSheetId: string | null
    googleCredential: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    email: string | null
    password: string | null
    picture: string | null
    centerSheetId: string | null
    googleCredential: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    username: number
    email: number
    password: number
    picture: number
    centerSheetId: number
    googleCredential: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    email?: true
    password?: true
    picture?: true
    centerSheetId?: true
    googleCredential?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    email?: true
    password?: true
    picture?: true
    centerSheetId?: true
    googleCredential?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    email?: true
    password?: true
    picture?: true
    centerSheetId?: true
    googleCredential?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which Users to aggregate.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    username: string
    email: string
    password: string
    picture: string
    centerSheetId: string
    googleCredential: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    picture?: boolean
    centerSheetId?: boolean
    googleCredential?: boolean
  }

  export type UsersGetPayload<
    S extends boolean | null | undefined | UsersArgs,
    U = keyof S
      > = S extends true
        ? Users
    : S extends undefined
    ? never
    : S extends UsersArgs | UsersFindManyArgs
    ?'include' extends U
    ? Users 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Users ? Users[P] : never
  } 
    : Users
  : Users


  type UsersCountArgs = Merge<
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface UsersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>> : CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>> : CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Users>>, PrismaPromise<Array<UsersGetPayload<T>>>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Throw an Error if a Users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Throw an Error if a Users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * The data needed to create a Users.
     * 
    **/
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * The data needed to update a Users.
     * 
    **/
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * The filter to search for the Users to update in case it exists.
     * 
    **/
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     * 
    **/
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Filter which Users to delete.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UsersWhereInput
  }


  /**
   * Users without action
   */
  export type UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
  }



  /**
   * Model Activities
   */


  export type AggregateActivities = {
    _count: ActivitiesCountAggregateOutputType | null
    _avg: ActivitiesAvgAggregateOutputType | null
    _sum: ActivitiesSumAggregateOutputType | null
    _min: ActivitiesMinAggregateOutputType | null
    _max: ActivitiesMaxAggregateOutputType | null
  }

  export type ActivitiesAvgAggregateOutputType = {
    id: number | null
  }

  export type ActivitiesSumAggregateOutputType = {
    id: number | null
  }

  export type ActivitiesMinAggregateOutputType = {
    id: number | null
    name: string | null
    venue: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    detail: string | null
    photo: string | null
  }

  export type ActivitiesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    venue: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    detail: string | null
    photo: string | null
  }

  export type ActivitiesCountAggregateOutputType = {
    id: number
    name: number
    venue: number
    status: number
    startDate: number
    endDate: number
    detail: number
    photo: number
    _all: number
  }


  export type ActivitiesAvgAggregateInputType = {
    id?: true
  }

  export type ActivitiesSumAggregateInputType = {
    id?: true
  }

  export type ActivitiesMinAggregateInputType = {
    id?: true
    name?: true
    venue?: true
    status?: true
    startDate?: true
    endDate?: true
    detail?: true
    photo?: true
  }

  export type ActivitiesMaxAggregateInputType = {
    id?: true
    name?: true
    venue?: true
    status?: true
    startDate?: true
    endDate?: true
    detail?: true
    photo?: true
  }

  export type ActivitiesCountAggregateInputType = {
    id?: true
    name?: true
    venue?: true
    status?: true
    startDate?: true
    endDate?: true
    detail?: true
    photo?: true
    _all?: true
  }

  export type ActivitiesAggregateArgs = {
    /**
     * Filter which Activities to aggregate.
     * 
    **/
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     * 
    **/
    orderBy?: Enumerable<ActivitiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivitiesMaxAggregateInputType
  }

  export type GetActivitiesAggregateType<T extends ActivitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateActivities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivities[P]>
      : GetScalarType<T[P], AggregateActivities[P]>
  }




  export type ActivitiesGroupByArgs = {
    where?: ActivitiesWhereInput
    orderBy?: Enumerable<ActivitiesOrderByWithAggregationInput>
    by: Array<ActivitiesScalarFieldEnum>
    having?: ActivitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivitiesCountAggregateInputType | true
    _avg?: ActivitiesAvgAggregateInputType
    _sum?: ActivitiesSumAggregateInputType
    _min?: ActivitiesMinAggregateInputType
    _max?: ActivitiesMaxAggregateInputType
  }


  export type ActivitiesGroupByOutputType = {
    id: number
    name: string
    venue: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    detail: string | null
    photo: string | null
    _count: ActivitiesCountAggregateOutputType | null
    _avg: ActivitiesAvgAggregateOutputType | null
    _sum: ActivitiesSumAggregateOutputType | null
    _min: ActivitiesMinAggregateOutputType | null
    _max: ActivitiesMaxAggregateOutputType | null
  }

  type GetActivitiesGroupByPayload<T extends ActivitiesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ActivitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivitiesGroupByOutputType[P]>
            : GetScalarType<T[P], ActivitiesGroupByOutputType[P]>
        }
      >
    >


  export type ActivitiesSelect = {
    id?: boolean
    name?: boolean
    venue?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    detail?: boolean
    photo?: boolean
    employees?: boolean | EmployeeActivitiesFindManyArgs
    _count?: boolean | ActivitiesCountOutputTypeArgs
  }

  export type ActivitiesInclude = {
    employees?: boolean | EmployeeActivitiesFindManyArgs
    _count?: boolean | ActivitiesCountOutputTypeArgs
  }

  export type ActivitiesGetPayload<
    S extends boolean | null | undefined | ActivitiesArgs,
    U = keyof S
      > = S extends true
        ? Activities
    : S extends undefined
    ? never
    : S extends ActivitiesArgs | ActivitiesFindManyArgs
    ?'include' extends U
    ? Activities  & {
    [P in TrueKeys<S['include']>]:
        P extends 'employees' ? Array < EmployeeActivitiesGetPayload<S['include'][P]>>  :
        P extends '_count' ? ActivitiesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'employees' ? Array < EmployeeActivitiesGetPayload<S['select'][P]>>  :
        P extends '_count' ? ActivitiesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Activities ? Activities[P] : never
  } 
    : Activities
  : Activities


  type ActivitiesCountArgs = Merge<
    Omit<ActivitiesFindManyArgs, 'select' | 'include'> & {
      select?: ActivitiesCountAggregateInputType | true
    }
  >

  export interface ActivitiesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Activities that matches the filter.
     * @param {ActivitiesFindUniqueArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActivitiesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ActivitiesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Activities'> extends True ? CheckSelect<T, Prisma__ActivitiesClient<Activities>, Prisma__ActivitiesClient<ActivitiesGetPayload<T>>> : CheckSelect<T, Prisma__ActivitiesClient<Activities | null >, Prisma__ActivitiesClient<ActivitiesGetPayload<T> | null >>

    /**
     * Find the first Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesFindFirstArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActivitiesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ActivitiesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Activities'> extends True ? CheckSelect<T, Prisma__ActivitiesClient<Activities>, Prisma__ActivitiesClient<ActivitiesGetPayload<T>>> : CheckSelect<T, Prisma__ActivitiesClient<Activities | null >, Prisma__ActivitiesClient<ActivitiesGetPayload<T> | null >>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activities.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activitiesWithIdOnly = await prisma.activities.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ActivitiesFindManyArgs>(
      args?: SelectSubset<T, ActivitiesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Activities>>, PrismaPromise<Array<ActivitiesGetPayload<T>>>>

    /**
     * Create a Activities.
     * @param {ActivitiesCreateArgs} args - Arguments to create a Activities.
     * @example
     * // Create one Activities
     * const Activities = await prisma.activities.create({
     *   data: {
     *     // ... data to create a Activities
     *   }
     * })
     * 
    **/
    create<T extends ActivitiesCreateArgs>(
      args: SelectSubset<T, ActivitiesCreateArgs>
    ): CheckSelect<T, Prisma__ActivitiesClient<Activities>, Prisma__ActivitiesClient<ActivitiesGetPayload<T>>>

    /**
     * Create many Activities.
     *     @param {ActivitiesCreateManyArgs} args - Arguments to create many Activities.
     *     @example
     *     // Create many Activities
     *     const activities = await prisma.activities.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ActivitiesCreateManyArgs>(
      args?: SelectSubset<T, ActivitiesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Activities.
     * @param {ActivitiesDeleteArgs} args - Arguments to delete one Activities.
     * @example
     * // Delete one Activities
     * const Activities = await prisma.activities.delete({
     *   where: {
     *     // ... filter to delete one Activities
     *   }
     * })
     * 
    **/
    delete<T extends ActivitiesDeleteArgs>(
      args: SelectSubset<T, ActivitiesDeleteArgs>
    ): CheckSelect<T, Prisma__ActivitiesClient<Activities>, Prisma__ActivitiesClient<ActivitiesGetPayload<T>>>

    /**
     * Update one Activities.
     * @param {ActivitiesUpdateArgs} args - Arguments to update one Activities.
     * @example
     * // Update one Activities
     * const activities = await prisma.activities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActivitiesUpdateArgs>(
      args: SelectSubset<T, ActivitiesUpdateArgs>
    ): CheckSelect<T, Prisma__ActivitiesClient<Activities>, Prisma__ActivitiesClient<ActivitiesGetPayload<T>>>

    /**
     * Delete zero or more Activities.
     * @param {ActivitiesDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActivitiesDeleteManyArgs>(
      args?: SelectSubset<T, ActivitiesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activities = await prisma.activities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActivitiesUpdateManyArgs>(
      args: SelectSubset<T, ActivitiesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Activities.
     * @param {ActivitiesUpsertArgs} args - Arguments to update or create a Activities.
     * @example
     * // Update or create a Activities
     * const activities = await prisma.activities.upsert({
     *   create: {
     *     // ... data to create a Activities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activities we want to update
     *   }
     * })
    **/
    upsert<T extends ActivitiesUpsertArgs>(
      args: SelectSubset<T, ActivitiesUpsertArgs>
    ): CheckSelect<T, Prisma__ActivitiesClient<Activities>, Prisma__ActivitiesClient<ActivitiesGetPayload<T>>>

    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activities.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivitiesCountArgs>(
      args?: Subset<T, ActivitiesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivitiesAggregateArgs>(args: Subset<T, ActivitiesAggregateArgs>): PrismaPromise<GetActivitiesAggregateType<T>>

    /**
     * Group by Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesGroupByArgs} args - Group by arguments.
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
      T extends ActivitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivitiesGroupByArgs['orderBy'] }
        : { orderBy?: ActivitiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ActivitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivitiesGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ActivitiesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    employees<T extends EmployeeActivitiesFindManyArgs = {}>(args?: Subset<T, EmployeeActivitiesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<EmployeeActivities>>, PrismaPromise<Array<EmployeeActivitiesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Activities findUnique
   */
  export type ActivitiesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Activities
     * 
    **/
    select?: ActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActivitiesInclude | null
    /**
     * Throw an Error if a Activities can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Activities to fetch.
     * 
    **/
    where: ActivitiesWhereUniqueInput
  }


  /**
   * Activities findFirst
   */
  export type ActivitiesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Activities
     * 
    **/
    select?: ActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActivitiesInclude | null
    /**
     * Throw an Error if a Activities can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Activities to fetch.
     * 
    **/
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     * 
    **/
    orderBy?: Enumerable<ActivitiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     * 
    **/
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     * 
    **/
    distinct?: Enumerable<ActivitiesScalarFieldEnum>
  }


  /**
   * Activities findMany
   */
  export type ActivitiesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Activities
     * 
    **/
    select?: ActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActivitiesInclude | null
    /**
     * Filter, which Activities to fetch.
     * 
    **/
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     * 
    **/
    orderBy?: Enumerable<ActivitiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     * 
    **/
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ActivitiesScalarFieldEnum>
  }


  /**
   * Activities create
   */
  export type ActivitiesCreateArgs = {
    /**
     * Select specific fields to fetch from the Activities
     * 
    **/
    select?: ActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActivitiesInclude | null
    /**
     * The data needed to create a Activities.
     * 
    **/
    data: XOR<ActivitiesCreateInput, ActivitiesUncheckedCreateInput>
  }


  /**
   * Activities createMany
   */
  export type ActivitiesCreateManyArgs = {
    /**
     * The data used to create many Activities.
     * 
    **/
    data: Enumerable<ActivitiesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Activities update
   */
  export type ActivitiesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Activities
     * 
    **/
    select?: ActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActivitiesInclude | null
    /**
     * The data needed to update a Activities.
     * 
    **/
    data: XOR<ActivitiesUpdateInput, ActivitiesUncheckedUpdateInput>
    /**
     * Choose, which Activities to update.
     * 
    **/
    where: ActivitiesWhereUniqueInput
  }


  /**
   * Activities updateMany
   */
  export type ActivitiesUpdateManyArgs = {
    /**
     * The data used to update Activities.
     * 
    **/
    data: XOR<ActivitiesUpdateManyMutationInput, ActivitiesUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     * 
    **/
    where?: ActivitiesWhereInput
  }


  /**
   * Activities upsert
   */
  export type ActivitiesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Activities
     * 
    **/
    select?: ActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActivitiesInclude | null
    /**
     * The filter to search for the Activities to update in case it exists.
     * 
    **/
    where: ActivitiesWhereUniqueInput
    /**
     * In case the Activities found by the `where` argument doesn't exist, create a new Activities with this data.
     * 
    **/
    create: XOR<ActivitiesCreateInput, ActivitiesUncheckedCreateInput>
    /**
     * In case the Activities was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ActivitiesUpdateInput, ActivitiesUncheckedUpdateInput>
  }


  /**
   * Activities delete
   */
  export type ActivitiesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Activities
     * 
    **/
    select?: ActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActivitiesInclude | null
    /**
     * Filter which Activities to delete.
     * 
    **/
    where: ActivitiesWhereUniqueInput
  }


  /**
   * Activities deleteMany
   */
  export type ActivitiesDeleteManyArgs = {
    /**
     * Filter which Activities to delete
     * 
    **/
    where?: ActivitiesWhereInput
  }


  /**
   * Activities without action
   */
  export type ActivitiesArgs = {
    /**
     * Select specific fields to fetch from the Activities
     * 
    **/
    select?: ActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActivitiesInclude | null
  }



  /**
   * Model EmployeeActivities
   */


  export type AggregateEmployeeActivities = {
    _count: EmployeeActivitiesCountAggregateOutputType | null
    _avg: EmployeeActivitiesAvgAggregateOutputType | null
    _sum: EmployeeActivitiesSumAggregateOutputType | null
    _min: EmployeeActivitiesMinAggregateOutputType | null
    _max: EmployeeActivitiesMaxAggregateOutputType | null
  }

  export type EmployeeActivitiesAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
    activityId: number | null
  }

  export type EmployeeActivitiesSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
    activityId: number | null
  }

  export type EmployeeActivitiesMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    activityId: number | null
  }

  export type EmployeeActivitiesMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    activityId: number | null
  }

  export type EmployeeActivitiesCountAggregateOutputType = {
    id: number
    employeeId: number
    activityId: number
    _all: number
  }


  export type EmployeeActivitiesAvgAggregateInputType = {
    id?: true
    employeeId?: true
    activityId?: true
  }

  export type EmployeeActivitiesSumAggregateInputType = {
    id?: true
    employeeId?: true
    activityId?: true
  }

  export type EmployeeActivitiesMinAggregateInputType = {
    id?: true
    employeeId?: true
    activityId?: true
  }

  export type EmployeeActivitiesMaxAggregateInputType = {
    id?: true
    employeeId?: true
    activityId?: true
  }

  export type EmployeeActivitiesCountAggregateInputType = {
    id?: true
    employeeId?: true
    activityId?: true
    _all?: true
  }

  export type EmployeeActivitiesAggregateArgs = {
    /**
     * Filter which EmployeeActivities to aggregate.
     * 
    **/
    where?: EmployeeActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeActivities to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeActivitiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EmployeeActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeActivities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeActivities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeActivities
    **/
    _count?: true | EmployeeActivitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeActivitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeActivitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeActivitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeActivitiesMaxAggregateInputType
  }

  export type GetEmployeeActivitiesAggregateType<T extends EmployeeActivitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeActivities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeActivities[P]>
      : GetScalarType<T[P], AggregateEmployeeActivities[P]>
  }




  export type EmployeeActivitiesGroupByArgs = {
    where?: EmployeeActivitiesWhereInput
    orderBy?: Enumerable<EmployeeActivitiesOrderByWithAggregationInput>
    by: Array<EmployeeActivitiesScalarFieldEnum>
    having?: EmployeeActivitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeActivitiesCountAggregateInputType | true
    _avg?: EmployeeActivitiesAvgAggregateInputType
    _sum?: EmployeeActivitiesSumAggregateInputType
    _min?: EmployeeActivitiesMinAggregateInputType
    _max?: EmployeeActivitiesMaxAggregateInputType
  }


  export type EmployeeActivitiesGroupByOutputType = {
    id: number
    employeeId: number
    activityId: number
    _count: EmployeeActivitiesCountAggregateOutputType | null
    _avg: EmployeeActivitiesAvgAggregateOutputType | null
    _sum: EmployeeActivitiesSumAggregateOutputType | null
    _min: EmployeeActivitiesMinAggregateOutputType | null
    _max: EmployeeActivitiesMaxAggregateOutputType | null
  }

  type GetEmployeeActivitiesGroupByPayload<T extends EmployeeActivitiesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EmployeeActivitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeActivitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeActivitiesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeActivitiesGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeActivitiesSelect = {
    id?: boolean
    employeeId?: boolean
    activityId?: boolean
    employee?: boolean | EmployeesArgs
    activity?: boolean | ActivitiesArgs
  }

  export type EmployeeActivitiesInclude = {
    employee?: boolean | EmployeesArgs
    activity?: boolean | ActivitiesArgs
  }

  export type EmployeeActivitiesGetPayload<
    S extends boolean | null | undefined | EmployeeActivitiesArgs,
    U = keyof S
      > = S extends true
        ? EmployeeActivities
    : S extends undefined
    ? never
    : S extends EmployeeActivitiesArgs | EmployeeActivitiesFindManyArgs
    ?'include' extends U
    ? EmployeeActivities  & {
    [P in TrueKeys<S['include']>]:
        P extends 'employee' ? EmployeesGetPayload<S['include'][P]> :
        P extends 'activity' ? ActivitiesGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'employee' ? EmployeesGetPayload<S['select'][P]> :
        P extends 'activity' ? ActivitiesGetPayload<S['select'][P]> :  P extends keyof EmployeeActivities ? EmployeeActivities[P] : never
  } 
    : EmployeeActivities
  : EmployeeActivities


  type EmployeeActivitiesCountArgs = Merge<
    Omit<EmployeeActivitiesFindManyArgs, 'select' | 'include'> & {
      select?: EmployeeActivitiesCountAggregateInputType | true
    }
  >

  export interface EmployeeActivitiesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one EmployeeActivities that matches the filter.
     * @param {EmployeeActivitiesFindUniqueArgs} args - Arguments to find a EmployeeActivities
     * @example
     * // Get one EmployeeActivities
     * const employeeActivities = await prisma.employeeActivities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmployeeActivitiesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EmployeeActivitiesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'EmployeeActivities'> extends True ? CheckSelect<T, Prisma__EmployeeActivitiesClient<EmployeeActivities>, Prisma__EmployeeActivitiesClient<EmployeeActivitiesGetPayload<T>>> : CheckSelect<T, Prisma__EmployeeActivitiesClient<EmployeeActivities | null >, Prisma__EmployeeActivitiesClient<EmployeeActivitiesGetPayload<T> | null >>

    /**
     * Find the first EmployeeActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeActivitiesFindFirstArgs} args - Arguments to find a EmployeeActivities
     * @example
     * // Get one EmployeeActivities
     * const employeeActivities = await prisma.employeeActivities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmployeeActivitiesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EmployeeActivitiesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'EmployeeActivities'> extends True ? CheckSelect<T, Prisma__EmployeeActivitiesClient<EmployeeActivities>, Prisma__EmployeeActivitiesClient<EmployeeActivitiesGetPayload<T>>> : CheckSelect<T, Prisma__EmployeeActivitiesClient<EmployeeActivities | null >, Prisma__EmployeeActivitiesClient<EmployeeActivitiesGetPayload<T> | null >>

    /**
     * Find zero or more EmployeeActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeActivitiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeActivities
     * const employeeActivities = await prisma.employeeActivities.findMany()
     * 
     * // Get first 10 EmployeeActivities
     * const employeeActivities = await prisma.employeeActivities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeActivitiesWithIdOnly = await prisma.employeeActivities.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmployeeActivitiesFindManyArgs>(
      args?: SelectSubset<T, EmployeeActivitiesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<EmployeeActivities>>, PrismaPromise<Array<EmployeeActivitiesGetPayload<T>>>>

    /**
     * Create a EmployeeActivities.
     * @param {EmployeeActivitiesCreateArgs} args - Arguments to create a EmployeeActivities.
     * @example
     * // Create one EmployeeActivities
     * const EmployeeActivities = await prisma.employeeActivities.create({
     *   data: {
     *     // ... data to create a EmployeeActivities
     *   }
     * })
     * 
    **/
    create<T extends EmployeeActivitiesCreateArgs>(
      args: SelectSubset<T, EmployeeActivitiesCreateArgs>
    ): CheckSelect<T, Prisma__EmployeeActivitiesClient<EmployeeActivities>, Prisma__EmployeeActivitiesClient<EmployeeActivitiesGetPayload<T>>>

    /**
     * Create many EmployeeActivities.
     *     @param {EmployeeActivitiesCreateManyArgs} args - Arguments to create many EmployeeActivities.
     *     @example
     *     // Create many EmployeeActivities
     *     const employeeActivities = await prisma.employeeActivities.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmployeeActivitiesCreateManyArgs>(
      args?: SelectSubset<T, EmployeeActivitiesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a EmployeeActivities.
     * @param {EmployeeActivitiesDeleteArgs} args - Arguments to delete one EmployeeActivities.
     * @example
     * // Delete one EmployeeActivities
     * const EmployeeActivities = await prisma.employeeActivities.delete({
     *   where: {
     *     // ... filter to delete one EmployeeActivities
     *   }
     * })
     * 
    **/
    delete<T extends EmployeeActivitiesDeleteArgs>(
      args: SelectSubset<T, EmployeeActivitiesDeleteArgs>
    ): CheckSelect<T, Prisma__EmployeeActivitiesClient<EmployeeActivities>, Prisma__EmployeeActivitiesClient<EmployeeActivitiesGetPayload<T>>>

    /**
     * Update one EmployeeActivities.
     * @param {EmployeeActivitiesUpdateArgs} args - Arguments to update one EmployeeActivities.
     * @example
     * // Update one EmployeeActivities
     * const employeeActivities = await prisma.employeeActivities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmployeeActivitiesUpdateArgs>(
      args: SelectSubset<T, EmployeeActivitiesUpdateArgs>
    ): CheckSelect<T, Prisma__EmployeeActivitiesClient<EmployeeActivities>, Prisma__EmployeeActivitiesClient<EmployeeActivitiesGetPayload<T>>>

    /**
     * Delete zero or more EmployeeActivities.
     * @param {EmployeeActivitiesDeleteManyArgs} args - Arguments to filter EmployeeActivities to delete.
     * @example
     * // Delete a few EmployeeActivities
     * const { count } = await prisma.employeeActivities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmployeeActivitiesDeleteManyArgs>(
      args?: SelectSubset<T, EmployeeActivitiesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeActivitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeActivities
     * const employeeActivities = await prisma.employeeActivities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmployeeActivitiesUpdateManyArgs>(
      args: SelectSubset<T, EmployeeActivitiesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one EmployeeActivities.
     * @param {EmployeeActivitiesUpsertArgs} args - Arguments to update or create a EmployeeActivities.
     * @example
     * // Update or create a EmployeeActivities
     * const employeeActivities = await prisma.employeeActivities.upsert({
     *   create: {
     *     // ... data to create a EmployeeActivities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeActivities we want to update
     *   }
     * })
    **/
    upsert<T extends EmployeeActivitiesUpsertArgs>(
      args: SelectSubset<T, EmployeeActivitiesUpsertArgs>
    ): CheckSelect<T, Prisma__EmployeeActivitiesClient<EmployeeActivities>, Prisma__EmployeeActivitiesClient<EmployeeActivitiesGetPayload<T>>>

    /**
     * Count the number of EmployeeActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeActivitiesCountArgs} args - Arguments to filter EmployeeActivities to count.
     * @example
     * // Count the number of EmployeeActivities
     * const count = await prisma.employeeActivities.count({
     *   where: {
     *     // ... the filter for the EmployeeActivities we want to count
     *   }
     * })
    **/
    count<T extends EmployeeActivitiesCountArgs>(
      args?: Subset<T, EmployeeActivitiesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeActivitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeActivitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeActivitiesAggregateArgs>(args: Subset<T, EmployeeActivitiesAggregateArgs>): PrismaPromise<GetEmployeeActivitiesAggregateType<T>>

    /**
     * Group by EmployeeActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeActivitiesGroupByArgs} args - Group by arguments.
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
      T extends EmployeeActivitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeActivitiesGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeActivitiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmployeeActivitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeActivitiesGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeActivities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EmployeeActivitiesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    employee<T extends EmployeesArgs = {}>(args?: Subset<T, EmployeesArgs>): CheckSelect<T, Prisma__EmployeesClient<Employees | null >, Prisma__EmployeesClient<EmployeesGetPayload<T> | null >>;

    activity<T extends ActivitiesArgs = {}>(args?: Subset<T, ActivitiesArgs>): CheckSelect<T, Prisma__ActivitiesClient<Activities | null >, Prisma__ActivitiesClient<ActivitiesGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * EmployeeActivities findUnique
   */
  export type EmployeeActivitiesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the EmployeeActivities
     * 
    **/
    select?: EmployeeActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeActivitiesInclude | null
    /**
     * Throw an Error if a EmployeeActivities can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which EmployeeActivities to fetch.
     * 
    **/
    where: EmployeeActivitiesWhereUniqueInput
  }


  /**
   * EmployeeActivities findFirst
   */
  export type EmployeeActivitiesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the EmployeeActivities
     * 
    **/
    select?: EmployeeActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeActivitiesInclude | null
    /**
     * Throw an Error if a EmployeeActivities can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which EmployeeActivities to fetch.
     * 
    **/
    where?: EmployeeActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeActivities to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeActivitiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeActivities.
     * 
    **/
    cursor?: EmployeeActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeActivities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeActivities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeActivities.
     * 
    **/
    distinct?: Enumerable<EmployeeActivitiesScalarFieldEnum>
  }


  /**
   * EmployeeActivities findMany
   */
  export type EmployeeActivitiesFindManyArgs = {
    /**
     * Select specific fields to fetch from the EmployeeActivities
     * 
    **/
    select?: EmployeeActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeActivitiesInclude | null
    /**
     * Filter, which EmployeeActivities to fetch.
     * 
    **/
    where?: EmployeeActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeActivities to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeActivitiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeActivities.
     * 
    **/
    cursor?: EmployeeActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeActivities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeActivities.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EmployeeActivitiesScalarFieldEnum>
  }


  /**
   * EmployeeActivities create
   */
  export type EmployeeActivitiesCreateArgs = {
    /**
     * Select specific fields to fetch from the EmployeeActivities
     * 
    **/
    select?: EmployeeActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeActivitiesInclude | null
    /**
     * The data needed to create a EmployeeActivities.
     * 
    **/
    data: XOR<EmployeeActivitiesCreateInput, EmployeeActivitiesUncheckedCreateInput>
  }


  /**
   * EmployeeActivities createMany
   */
  export type EmployeeActivitiesCreateManyArgs = {
    /**
     * The data used to create many EmployeeActivities.
     * 
    **/
    data: Enumerable<EmployeeActivitiesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * EmployeeActivities update
   */
  export type EmployeeActivitiesUpdateArgs = {
    /**
     * Select specific fields to fetch from the EmployeeActivities
     * 
    **/
    select?: EmployeeActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeActivitiesInclude | null
    /**
     * The data needed to update a EmployeeActivities.
     * 
    **/
    data: XOR<EmployeeActivitiesUpdateInput, EmployeeActivitiesUncheckedUpdateInput>
    /**
     * Choose, which EmployeeActivities to update.
     * 
    **/
    where: EmployeeActivitiesWhereUniqueInput
  }


  /**
   * EmployeeActivities updateMany
   */
  export type EmployeeActivitiesUpdateManyArgs = {
    /**
     * The data used to update EmployeeActivities.
     * 
    **/
    data: XOR<EmployeeActivitiesUpdateManyMutationInput, EmployeeActivitiesUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeActivities to update
     * 
    **/
    where?: EmployeeActivitiesWhereInput
  }


  /**
   * EmployeeActivities upsert
   */
  export type EmployeeActivitiesUpsertArgs = {
    /**
     * Select specific fields to fetch from the EmployeeActivities
     * 
    **/
    select?: EmployeeActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeActivitiesInclude | null
    /**
     * The filter to search for the EmployeeActivities to update in case it exists.
     * 
    **/
    where: EmployeeActivitiesWhereUniqueInput
    /**
     * In case the EmployeeActivities found by the `where` argument doesn't exist, create a new EmployeeActivities with this data.
     * 
    **/
    create: XOR<EmployeeActivitiesCreateInput, EmployeeActivitiesUncheckedCreateInput>
    /**
     * In case the EmployeeActivities was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EmployeeActivitiesUpdateInput, EmployeeActivitiesUncheckedUpdateInput>
  }


  /**
   * EmployeeActivities delete
   */
  export type EmployeeActivitiesDeleteArgs = {
    /**
     * Select specific fields to fetch from the EmployeeActivities
     * 
    **/
    select?: EmployeeActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeActivitiesInclude | null
    /**
     * Filter which EmployeeActivities to delete.
     * 
    **/
    where: EmployeeActivitiesWhereUniqueInput
  }


  /**
   * EmployeeActivities deleteMany
   */
  export type EmployeeActivitiesDeleteManyArgs = {
    /**
     * Filter which EmployeeActivities to delete
     * 
    **/
    where?: EmployeeActivitiesWhereInput
  }


  /**
   * EmployeeActivities without action
   */
  export type EmployeeActivitiesArgs = {
    /**
     * Select specific fields to fetch from the EmployeeActivities
     * 
    **/
    select?: EmployeeActivitiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeActivitiesInclude | null
  }



  /**
   * Model Employees
   */


  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesAvgAggregateOutputType = {
    id: number | null
  }

  export type EmployeesSumAggregateOutputType = {
    id: number | null
  }

  export type EmployeesMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    gender: Gender | null
    placeOfBirth: string | null
    dateOfBirth: Date | null
    marriageStatus: boolean | null
    photo: string | null
    address: string | null
    officeEmail: string | null
    officeEmailPassword: string | null
    status: string | null
    handphone: string | null
    startWork: Date | null
    endWork: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    gender: Gender | null
    placeOfBirth: string | null
    dateOfBirth: Date | null
    marriageStatus: boolean | null
    photo: string | null
    address: string | null
    officeEmail: string | null
    officeEmailPassword: string | null
    status: string | null
    handphone: string | null
    startWork: Date | null
    endWork: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeesCountAggregateOutputType = {
    id: number
    name: number
    email: number
    gender: number
    placeOfBirth: number
    dateOfBirth: number
    marriageStatus: number
    photo: number
    address: number
    officeEmail: number
    officeEmailPassword: number
    status: number
    handphone: number
    startWork: number
    endWork: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeesAvgAggregateInputType = {
    id?: true
  }

  export type EmployeesSumAggregateInputType = {
    id?: true
  }

  export type EmployeesMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    placeOfBirth?: true
    dateOfBirth?: true
    marriageStatus?: true
    photo?: true
    address?: true
    officeEmail?: true
    officeEmailPassword?: true
    status?: true
    handphone?: true
    startWork?: true
    endWork?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeesMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    placeOfBirth?: true
    dateOfBirth?: true
    marriageStatus?: true
    photo?: true
    address?: true
    officeEmail?: true
    officeEmailPassword?: true
    status?: true
    handphone?: true
    startWork?: true
    endWork?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeesCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    placeOfBirth?: true
    dateOfBirth?: true
    marriageStatus?: true
    photo?: true
    address?: true
    officeEmail?: true
    officeEmailPassword?: true
    status?: true
    handphone?: true
    startWork?: true
    endWork?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeesAggregateArgs = {
    /**
     * Filter which Employees to aggregate.
     * 
    **/
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type EmployeesGroupByArgs = {
    where?: EmployeesWhereInput
    orderBy?: Enumerable<EmployeesOrderByWithAggregationInput>
    by: Array<EmployeesScalarFieldEnum>
    having?: EmployeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _avg?: EmployeesAvgAggregateInputType
    _sum?: EmployeesSumAggregateInputType
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }


  export type EmployeesGroupByOutputType = {
    id: number
    name: string
    email: string
    gender: Gender
    placeOfBirth: string
    dateOfBirth: Date
    marriageStatus: boolean
    photo: string | null
    address: string | null
    officeEmail: string | null
    officeEmailPassword: string | null
    status: string | null
    handphone: string | null
    startWork: Date
    endWork: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends EmployeesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type EmployeesSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    placeOfBirth?: boolean
    dateOfBirth?: boolean
    marriageStatus?: boolean
    photo?: boolean
    address?: boolean
    officeEmail?: boolean
    officeEmailPassword?: boolean
    status?: boolean
    handphone?: boolean
    startWork?: boolean
    endWork?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schools?: boolean | EmployeeSchoolsFindManyArgs
    roles?: boolean | EmployeeRolesFindManyArgs
    teams?: boolean | EmployeeTeamsFindManyArgs
    activities?: boolean | EmployeeActivitiesFindManyArgs
    _count?: boolean | EmployeesCountOutputTypeArgs
  }

  export type EmployeesInclude = {
    schools?: boolean | EmployeeSchoolsFindManyArgs
    roles?: boolean | EmployeeRolesFindManyArgs
    teams?: boolean | EmployeeTeamsFindManyArgs
    activities?: boolean | EmployeeActivitiesFindManyArgs
    _count?: boolean | EmployeesCountOutputTypeArgs
  }

  export type EmployeesGetPayload<
    S extends boolean | null | undefined | EmployeesArgs,
    U = keyof S
      > = S extends true
        ? Employees
    : S extends undefined
    ? never
    : S extends EmployeesArgs | EmployeesFindManyArgs
    ?'include' extends U
    ? Employees  & {
    [P in TrueKeys<S['include']>]:
        P extends 'schools' ? Array < EmployeeSchoolsGetPayload<S['include'][P]>>  :
        P extends 'roles' ? Array < EmployeeRolesGetPayload<S['include'][P]>>  :
        P extends 'teams' ? Array < EmployeeTeamsGetPayload<S['include'][P]>>  :
        P extends 'activities' ? Array < EmployeeActivitiesGetPayload<S['include'][P]>>  :
        P extends '_count' ? EmployeesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'schools' ? Array < EmployeeSchoolsGetPayload<S['select'][P]>>  :
        P extends 'roles' ? Array < EmployeeRolesGetPayload<S['select'][P]>>  :
        P extends 'teams' ? Array < EmployeeTeamsGetPayload<S['select'][P]>>  :
        P extends 'activities' ? Array < EmployeeActivitiesGetPayload<S['select'][P]>>  :
        P extends '_count' ? EmployeesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Employees ? Employees[P] : never
  } 
    : Employees
  : Employees


  type EmployeesCountArgs = Merge<
    Omit<EmployeesFindManyArgs, 'select' | 'include'> & {
      select?: EmployeesCountAggregateInputType | true
    }
  >

  export interface EmployeesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Employees that matches the filter.
     * @param {EmployeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmployeesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EmployeesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Employees'> extends True ? CheckSelect<T, Prisma__EmployeesClient<Employees>, Prisma__EmployeesClient<EmployeesGetPayload<T>>> : CheckSelect<T, Prisma__EmployeesClient<Employees | null >, Prisma__EmployeesClient<EmployeesGetPayload<T> | null >>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmployeesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EmployeesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Employees'> extends True ? CheckSelect<T, Prisma__EmployeesClient<Employees>, Prisma__EmployeesClient<EmployeesGetPayload<T>>> : CheckSelect<T, Prisma__EmployeesClient<Employees | null >, Prisma__EmployeesClient<EmployeesGetPayload<T> | null >>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeesWithIdOnly = await prisma.employees.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmployeesFindManyArgs>(
      args?: SelectSubset<T, EmployeesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Employees>>, PrismaPromise<Array<EmployeesGetPayload<T>>>>

    /**
     * Create a Employees.
     * @param {EmployeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
    **/
    create<T extends EmployeesCreateArgs>(
      args: SelectSubset<T, EmployeesCreateArgs>
    ): CheckSelect<T, Prisma__EmployeesClient<Employees>, Prisma__EmployeesClient<EmployeesGetPayload<T>>>

    /**
     * Create many Employees.
     *     @param {EmployeesCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employees = await prisma.employees.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmployeesCreateManyArgs>(
      args?: SelectSubset<T, EmployeesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Employees.
     * @param {EmployeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
    **/
    delete<T extends EmployeesDeleteArgs>(
      args: SelectSubset<T, EmployeesDeleteArgs>
    ): CheckSelect<T, Prisma__EmployeesClient<Employees>, Prisma__EmployeesClient<EmployeesGetPayload<T>>>

    /**
     * Update one Employees.
     * @param {EmployeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmployeesUpdateArgs>(
      args: SelectSubset<T, EmployeesUpdateArgs>
    ): CheckSelect<T, Prisma__EmployeesClient<Employees>, Prisma__EmployeesClient<EmployeesGetPayload<T>>>

    /**
     * Delete zero or more Employees.
     * @param {EmployeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmployeesDeleteManyArgs>(
      args?: SelectSubset<T, EmployeesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmployeesUpdateManyArgs>(
      args: SelectSubset<T, EmployeesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Employees.
     * @param {EmployeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
    **/
    upsert<T extends EmployeesUpsertArgs>(
      args: SelectSubset<T, EmployeesUpsertArgs>
    ): CheckSelect<T, Prisma__EmployeesClient<Employees>, Prisma__EmployeesClient<EmployeesGetPayload<T>>>

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeesCountArgs>(
      args?: Subset<T, EmployeesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesGroupByArgs} args - Group by arguments.
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
      T extends EmployeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeesGroupByArgs['orderBy'] }
        : { orderBy?: EmployeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmployeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EmployeesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    schools<T extends EmployeeSchoolsFindManyArgs = {}>(args?: Subset<T, EmployeeSchoolsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<EmployeeSchools>>, PrismaPromise<Array<EmployeeSchoolsGetPayload<T>>>>;

    roles<T extends EmployeeRolesFindManyArgs = {}>(args?: Subset<T, EmployeeRolesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<EmployeeRoles>>, PrismaPromise<Array<EmployeeRolesGetPayload<T>>>>;

    teams<T extends EmployeeTeamsFindManyArgs = {}>(args?: Subset<T, EmployeeTeamsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<EmployeeTeams>>, PrismaPromise<Array<EmployeeTeamsGetPayload<T>>>>;

    activities<T extends EmployeeActivitiesFindManyArgs = {}>(args?: Subset<T, EmployeeActivitiesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<EmployeeActivities>>, PrismaPromise<Array<EmployeeActivitiesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Employees findUnique
   */
  export type EmployeesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Employees
     * 
    **/
    select?: EmployeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeesInclude | null
    /**
     * Throw an Error if a Employees can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Employees to fetch.
     * 
    **/
    where: EmployeesWhereUniqueInput
  }


  /**
   * Employees findFirst
   */
  export type EmployeesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Employees
     * 
    **/
    select?: EmployeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeesInclude | null
    /**
     * Throw an Error if a Employees can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Employees to fetch.
     * 
    **/
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     * 
    **/
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     * 
    **/
    distinct?: Enumerable<EmployeesScalarFieldEnum>
  }


  /**
   * Employees findMany
   */
  export type EmployeesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Employees
     * 
    **/
    select?: EmployeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeesInclude | null
    /**
     * Filter, which Employees to fetch.
     * 
    **/
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     * 
    **/
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EmployeesScalarFieldEnum>
  }


  /**
   * Employees create
   */
  export type EmployeesCreateArgs = {
    /**
     * Select specific fields to fetch from the Employees
     * 
    **/
    select?: EmployeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeesInclude | null
    /**
     * The data needed to create a Employees.
     * 
    **/
    data: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
  }


  /**
   * Employees createMany
   */
  export type EmployeesCreateManyArgs = {
    /**
     * The data used to create many Employees.
     * 
    **/
    data: Enumerable<EmployeesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Employees update
   */
  export type EmployeesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Employees
     * 
    **/
    select?: EmployeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeesInclude | null
    /**
     * The data needed to update a Employees.
     * 
    **/
    data: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
    /**
     * Choose, which Employees to update.
     * 
    **/
    where: EmployeesWhereUniqueInput
  }


  /**
   * Employees updateMany
   */
  export type EmployeesUpdateManyArgs = {
    /**
     * The data used to update Employees.
     * 
    **/
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     * 
    **/
    where?: EmployeesWhereInput
  }


  /**
   * Employees upsert
   */
  export type EmployeesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Employees
     * 
    **/
    select?: EmployeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeesInclude | null
    /**
     * The filter to search for the Employees to update in case it exists.
     * 
    **/
    where: EmployeesWhereUniqueInput
    /**
     * In case the Employees found by the `where` argument doesn't exist, create a new Employees with this data.
     * 
    **/
    create: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
    /**
     * In case the Employees was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
  }


  /**
   * Employees delete
   */
  export type EmployeesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Employees
     * 
    **/
    select?: EmployeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeesInclude | null
    /**
     * Filter which Employees to delete.
     * 
    **/
    where: EmployeesWhereUniqueInput
  }


  /**
   * Employees deleteMany
   */
  export type EmployeesDeleteManyArgs = {
    /**
     * Filter which Employees to delete
     * 
    **/
    where?: EmployeesWhereInput
  }


  /**
   * Employees without action
   */
  export type EmployeesArgs = {
    /**
     * Select specific fields to fetch from the Employees
     * 
    **/
    select?: EmployeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeesInclude | null
  }



  /**
   * Model EmployeeTeams
   */


  export type AggregateEmployeeTeams = {
    _count: EmployeeTeamsCountAggregateOutputType | null
    _avg: EmployeeTeamsAvgAggregateOutputType | null
    _sum: EmployeeTeamsSumAggregateOutputType | null
    _min: EmployeeTeamsMinAggregateOutputType | null
    _max: EmployeeTeamsMaxAggregateOutputType | null
  }

  export type EmployeeTeamsAvgAggregateOutputType = {
    employeeId: number | null
    teamId: number | null
    roleId: number | null
    id: number | null
  }

  export type EmployeeTeamsSumAggregateOutputType = {
    employeeId: number | null
    teamId: number | null
    roleId: number | null
    id: number | null
  }

  export type EmployeeTeamsMinAggregateOutputType = {
    employeeId: number | null
    teamId: number | null
    code: string | null
    roleId: number | null
    id: number | null
  }

  export type EmployeeTeamsMaxAggregateOutputType = {
    employeeId: number | null
    teamId: number | null
    code: string | null
    roleId: number | null
    id: number | null
  }

  export type EmployeeTeamsCountAggregateOutputType = {
    employeeId: number
    teamId: number
    code: number
    roleId: number
    id: number
    _all: number
  }


  export type EmployeeTeamsAvgAggregateInputType = {
    employeeId?: true
    teamId?: true
    roleId?: true
    id?: true
  }

  export type EmployeeTeamsSumAggregateInputType = {
    employeeId?: true
    teamId?: true
    roleId?: true
    id?: true
  }

  export type EmployeeTeamsMinAggregateInputType = {
    employeeId?: true
    teamId?: true
    code?: true
    roleId?: true
    id?: true
  }

  export type EmployeeTeamsMaxAggregateInputType = {
    employeeId?: true
    teamId?: true
    code?: true
    roleId?: true
    id?: true
  }

  export type EmployeeTeamsCountAggregateInputType = {
    employeeId?: true
    teamId?: true
    code?: true
    roleId?: true
    id?: true
    _all?: true
  }

  export type EmployeeTeamsAggregateArgs = {
    /**
     * Filter which EmployeeTeams to aggregate.
     * 
    **/
    where?: EmployeeTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeTeams to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeTeamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EmployeeTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeTeams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeTeams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeTeams
    **/
    _count?: true | EmployeeTeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeTeamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeTeamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeTeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeTeamsMaxAggregateInputType
  }

  export type GetEmployeeTeamsAggregateType<T extends EmployeeTeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeTeams[P]>
      : GetScalarType<T[P], AggregateEmployeeTeams[P]>
  }




  export type EmployeeTeamsGroupByArgs = {
    where?: EmployeeTeamsWhereInput
    orderBy?: Enumerable<EmployeeTeamsOrderByWithAggregationInput>
    by: Array<EmployeeTeamsScalarFieldEnum>
    having?: EmployeeTeamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeTeamsCountAggregateInputType | true
    _avg?: EmployeeTeamsAvgAggregateInputType
    _sum?: EmployeeTeamsSumAggregateInputType
    _min?: EmployeeTeamsMinAggregateInputType
    _max?: EmployeeTeamsMaxAggregateInputType
  }


  export type EmployeeTeamsGroupByOutputType = {
    employeeId: number
    teamId: number
    code: string
    roleId: number
    id: number
    _count: EmployeeTeamsCountAggregateOutputType | null
    _avg: EmployeeTeamsAvgAggregateOutputType | null
    _sum: EmployeeTeamsSumAggregateOutputType | null
    _min: EmployeeTeamsMinAggregateOutputType | null
    _max: EmployeeTeamsMaxAggregateOutputType | null
  }

  type GetEmployeeTeamsGroupByPayload<T extends EmployeeTeamsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EmployeeTeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeTeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeTeamsGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeTeamsGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeTeamsSelect = {
    employeeId?: boolean
    teamId?: boolean
    code?: boolean
    roleId?: boolean
    role?: boolean | RolesArgs
    employees?: boolean | EmployeesArgs
    teams?: boolean | TeamsArgs
    id?: boolean
  }

  export type EmployeeTeamsInclude = {
    role?: boolean | RolesArgs
    employees?: boolean | EmployeesArgs
    teams?: boolean | TeamsArgs
  }

  export type EmployeeTeamsGetPayload<
    S extends boolean | null | undefined | EmployeeTeamsArgs,
    U = keyof S
      > = S extends true
        ? EmployeeTeams
    : S extends undefined
    ? never
    : S extends EmployeeTeamsArgs | EmployeeTeamsFindManyArgs
    ?'include' extends U
    ? EmployeeTeams  & {
    [P in TrueKeys<S['include']>]:
        P extends 'role' ? RolesGetPayload<S['include'][P]> :
        P extends 'employees' ? EmployeesGetPayload<S['include'][P]> :
        P extends 'teams' ? TeamsGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'role' ? RolesGetPayload<S['select'][P]> :
        P extends 'employees' ? EmployeesGetPayload<S['select'][P]> :
        P extends 'teams' ? TeamsGetPayload<S['select'][P]> :  P extends keyof EmployeeTeams ? EmployeeTeams[P] : never
  } 
    : EmployeeTeams
  : EmployeeTeams


  type EmployeeTeamsCountArgs = Merge<
    Omit<EmployeeTeamsFindManyArgs, 'select' | 'include'> & {
      select?: EmployeeTeamsCountAggregateInputType | true
    }
  >

  export interface EmployeeTeamsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one EmployeeTeams that matches the filter.
     * @param {EmployeeTeamsFindUniqueArgs} args - Arguments to find a EmployeeTeams
     * @example
     * // Get one EmployeeTeams
     * const employeeTeams = await prisma.employeeTeams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmployeeTeamsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EmployeeTeamsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'EmployeeTeams'> extends True ? CheckSelect<T, Prisma__EmployeeTeamsClient<EmployeeTeams>, Prisma__EmployeeTeamsClient<EmployeeTeamsGetPayload<T>>> : CheckSelect<T, Prisma__EmployeeTeamsClient<EmployeeTeams | null >, Prisma__EmployeeTeamsClient<EmployeeTeamsGetPayload<T> | null >>

    /**
     * Find the first EmployeeTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTeamsFindFirstArgs} args - Arguments to find a EmployeeTeams
     * @example
     * // Get one EmployeeTeams
     * const employeeTeams = await prisma.employeeTeams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmployeeTeamsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EmployeeTeamsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'EmployeeTeams'> extends True ? CheckSelect<T, Prisma__EmployeeTeamsClient<EmployeeTeams>, Prisma__EmployeeTeamsClient<EmployeeTeamsGetPayload<T>>> : CheckSelect<T, Prisma__EmployeeTeamsClient<EmployeeTeams | null >, Prisma__EmployeeTeamsClient<EmployeeTeamsGetPayload<T> | null >>

    /**
     * Find zero or more EmployeeTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTeamsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeTeams
     * const employeeTeams = await prisma.employeeTeams.findMany()
     * 
     * // Get first 10 EmployeeTeams
     * const employeeTeams = await prisma.employeeTeams.findMany({ take: 10 })
     * 
     * // Only select the `employeeId`
     * const employeeTeamsWithEmployeeIdOnly = await prisma.employeeTeams.findMany({ select: { employeeId: true } })
     * 
    **/
    findMany<T extends EmployeeTeamsFindManyArgs>(
      args?: SelectSubset<T, EmployeeTeamsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<EmployeeTeams>>, PrismaPromise<Array<EmployeeTeamsGetPayload<T>>>>

    /**
     * Create a EmployeeTeams.
     * @param {EmployeeTeamsCreateArgs} args - Arguments to create a EmployeeTeams.
     * @example
     * // Create one EmployeeTeams
     * const EmployeeTeams = await prisma.employeeTeams.create({
     *   data: {
     *     // ... data to create a EmployeeTeams
     *   }
     * })
     * 
    **/
    create<T extends EmployeeTeamsCreateArgs>(
      args: SelectSubset<T, EmployeeTeamsCreateArgs>
    ): CheckSelect<T, Prisma__EmployeeTeamsClient<EmployeeTeams>, Prisma__EmployeeTeamsClient<EmployeeTeamsGetPayload<T>>>

    /**
     * Create many EmployeeTeams.
     *     @param {EmployeeTeamsCreateManyArgs} args - Arguments to create many EmployeeTeams.
     *     @example
     *     // Create many EmployeeTeams
     *     const employeeTeams = await prisma.employeeTeams.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmployeeTeamsCreateManyArgs>(
      args?: SelectSubset<T, EmployeeTeamsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a EmployeeTeams.
     * @param {EmployeeTeamsDeleteArgs} args - Arguments to delete one EmployeeTeams.
     * @example
     * // Delete one EmployeeTeams
     * const EmployeeTeams = await prisma.employeeTeams.delete({
     *   where: {
     *     // ... filter to delete one EmployeeTeams
     *   }
     * })
     * 
    **/
    delete<T extends EmployeeTeamsDeleteArgs>(
      args: SelectSubset<T, EmployeeTeamsDeleteArgs>
    ): CheckSelect<T, Prisma__EmployeeTeamsClient<EmployeeTeams>, Prisma__EmployeeTeamsClient<EmployeeTeamsGetPayload<T>>>

    /**
     * Update one EmployeeTeams.
     * @param {EmployeeTeamsUpdateArgs} args - Arguments to update one EmployeeTeams.
     * @example
     * // Update one EmployeeTeams
     * const employeeTeams = await prisma.employeeTeams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmployeeTeamsUpdateArgs>(
      args: SelectSubset<T, EmployeeTeamsUpdateArgs>
    ): CheckSelect<T, Prisma__EmployeeTeamsClient<EmployeeTeams>, Prisma__EmployeeTeamsClient<EmployeeTeamsGetPayload<T>>>

    /**
     * Delete zero or more EmployeeTeams.
     * @param {EmployeeTeamsDeleteManyArgs} args - Arguments to filter EmployeeTeams to delete.
     * @example
     * // Delete a few EmployeeTeams
     * const { count } = await prisma.employeeTeams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmployeeTeamsDeleteManyArgs>(
      args?: SelectSubset<T, EmployeeTeamsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTeamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeTeams
     * const employeeTeams = await prisma.employeeTeams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmployeeTeamsUpdateManyArgs>(
      args: SelectSubset<T, EmployeeTeamsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one EmployeeTeams.
     * @param {EmployeeTeamsUpsertArgs} args - Arguments to update or create a EmployeeTeams.
     * @example
     * // Update or create a EmployeeTeams
     * const employeeTeams = await prisma.employeeTeams.upsert({
     *   create: {
     *     // ... data to create a EmployeeTeams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeTeams we want to update
     *   }
     * })
    **/
    upsert<T extends EmployeeTeamsUpsertArgs>(
      args: SelectSubset<T, EmployeeTeamsUpsertArgs>
    ): CheckSelect<T, Prisma__EmployeeTeamsClient<EmployeeTeams>, Prisma__EmployeeTeamsClient<EmployeeTeamsGetPayload<T>>>

    /**
     * Count the number of EmployeeTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTeamsCountArgs} args - Arguments to filter EmployeeTeams to count.
     * @example
     * // Count the number of EmployeeTeams
     * const count = await prisma.employeeTeams.count({
     *   where: {
     *     // ... the filter for the EmployeeTeams we want to count
     *   }
     * })
    **/
    count<T extends EmployeeTeamsCountArgs>(
      args?: Subset<T, EmployeeTeamsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeTeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeTeamsAggregateArgs>(args: Subset<T, EmployeeTeamsAggregateArgs>): PrismaPromise<GetEmployeeTeamsAggregateType<T>>

    /**
     * Group by EmployeeTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeTeamsGroupByArgs} args - Group by arguments.
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
      T extends EmployeeTeamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeTeamsGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeTeamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmployeeTeamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeTeamsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeTeams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EmployeeTeamsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    role<T extends RolesArgs = {}>(args?: Subset<T, RolesArgs>): CheckSelect<T, Prisma__RolesClient<Roles | null >, Prisma__RolesClient<RolesGetPayload<T> | null >>;

    employees<T extends EmployeesArgs = {}>(args?: Subset<T, EmployeesArgs>): CheckSelect<T, Prisma__EmployeesClient<Employees | null >, Prisma__EmployeesClient<EmployeesGetPayload<T> | null >>;

    teams<T extends TeamsArgs = {}>(args?: Subset<T, TeamsArgs>): CheckSelect<T, Prisma__TeamsClient<Teams | null >, Prisma__TeamsClient<TeamsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * EmployeeTeams findUnique
   */
  export type EmployeeTeamsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the EmployeeTeams
     * 
    **/
    select?: EmployeeTeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeTeamsInclude | null
    /**
     * Throw an Error if a EmployeeTeams can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which EmployeeTeams to fetch.
     * 
    **/
    where: EmployeeTeamsWhereUniqueInput
  }


  /**
   * EmployeeTeams findFirst
   */
  export type EmployeeTeamsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the EmployeeTeams
     * 
    **/
    select?: EmployeeTeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeTeamsInclude | null
    /**
     * Throw an Error if a EmployeeTeams can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which EmployeeTeams to fetch.
     * 
    **/
    where?: EmployeeTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeTeams to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeTeamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeTeams.
     * 
    **/
    cursor?: EmployeeTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeTeams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeTeams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeTeams.
     * 
    **/
    distinct?: Enumerable<EmployeeTeamsScalarFieldEnum>
  }


  /**
   * EmployeeTeams findMany
   */
  export type EmployeeTeamsFindManyArgs = {
    /**
     * Select specific fields to fetch from the EmployeeTeams
     * 
    **/
    select?: EmployeeTeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeTeamsInclude | null
    /**
     * Filter, which EmployeeTeams to fetch.
     * 
    **/
    where?: EmployeeTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeTeams to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeTeamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeTeams.
     * 
    **/
    cursor?: EmployeeTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeTeams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeTeams.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EmployeeTeamsScalarFieldEnum>
  }


  /**
   * EmployeeTeams create
   */
  export type EmployeeTeamsCreateArgs = {
    /**
     * Select specific fields to fetch from the EmployeeTeams
     * 
    **/
    select?: EmployeeTeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeTeamsInclude | null
    /**
     * The data needed to create a EmployeeTeams.
     * 
    **/
    data: XOR<EmployeeTeamsCreateInput, EmployeeTeamsUncheckedCreateInput>
  }


  /**
   * EmployeeTeams createMany
   */
  export type EmployeeTeamsCreateManyArgs = {
    /**
     * The data used to create many EmployeeTeams.
     * 
    **/
    data: Enumerable<EmployeeTeamsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * EmployeeTeams update
   */
  export type EmployeeTeamsUpdateArgs = {
    /**
     * Select specific fields to fetch from the EmployeeTeams
     * 
    **/
    select?: EmployeeTeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeTeamsInclude | null
    /**
     * The data needed to update a EmployeeTeams.
     * 
    **/
    data: XOR<EmployeeTeamsUpdateInput, EmployeeTeamsUncheckedUpdateInput>
    /**
     * Choose, which EmployeeTeams to update.
     * 
    **/
    where: EmployeeTeamsWhereUniqueInput
  }


  /**
   * EmployeeTeams updateMany
   */
  export type EmployeeTeamsUpdateManyArgs = {
    /**
     * The data used to update EmployeeTeams.
     * 
    **/
    data: XOR<EmployeeTeamsUpdateManyMutationInput, EmployeeTeamsUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeTeams to update
     * 
    **/
    where?: EmployeeTeamsWhereInput
  }


  /**
   * EmployeeTeams upsert
   */
  export type EmployeeTeamsUpsertArgs = {
    /**
     * Select specific fields to fetch from the EmployeeTeams
     * 
    **/
    select?: EmployeeTeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeTeamsInclude | null
    /**
     * The filter to search for the EmployeeTeams to update in case it exists.
     * 
    **/
    where: EmployeeTeamsWhereUniqueInput
    /**
     * In case the EmployeeTeams found by the `where` argument doesn't exist, create a new EmployeeTeams with this data.
     * 
    **/
    create: XOR<EmployeeTeamsCreateInput, EmployeeTeamsUncheckedCreateInput>
    /**
     * In case the EmployeeTeams was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EmployeeTeamsUpdateInput, EmployeeTeamsUncheckedUpdateInput>
  }


  /**
   * EmployeeTeams delete
   */
  export type EmployeeTeamsDeleteArgs = {
    /**
     * Select specific fields to fetch from the EmployeeTeams
     * 
    **/
    select?: EmployeeTeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeTeamsInclude | null
    /**
     * Filter which EmployeeTeams to delete.
     * 
    **/
    where: EmployeeTeamsWhereUniqueInput
  }


  /**
   * EmployeeTeams deleteMany
   */
  export type EmployeeTeamsDeleteManyArgs = {
    /**
     * Filter which EmployeeTeams to delete
     * 
    **/
    where?: EmployeeTeamsWhereInput
  }


  /**
   * EmployeeTeams without action
   */
  export type EmployeeTeamsArgs = {
    /**
     * Select specific fields to fetch from the EmployeeTeams
     * 
    **/
    select?: EmployeeTeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeTeamsInclude | null
  }



  /**
   * Model EmployeeSchools
   */


  export type AggregateEmployeeSchools = {
    _count: EmployeeSchoolsCountAggregateOutputType | null
    _avg: EmployeeSchoolsAvgAggregateOutputType | null
    _sum: EmployeeSchoolsSumAggregateOutputType | null
    _min: EmployeeSchoolsMinAggregateOutputType | null
    _max: EmployeeSchoolsMaxAggregateOutputType | null
  }

  export type EmployeeSchoolsAvgAggregateOutputType = {
    id: number | null
    graduateYear: number | null
    employeeId: number | null
    schoolId: number | null
  }

  export type EmployeeSchoolsSumAggregateOutputType = {
    id: number | null
    graduateYear: number | null
    employeeId: number | null
    schoolId: number | null
  }

  export type EmployeeSchoolsMinAggregateOutputType = {
    id: number | null
    graduateYear: number | null
    employeeId: number | null
    schoolId: number | null
  }

  export type EmployeeSchoolsMaxAggregateOutputType = {
    id: number | null
    graduateYear: number | null
    employeeId: number | null
    schoolId: number | null
  }

  export type EmployeeSchoolsCountAggregateOutputType = {
    id: number
    graduateYear: number
    employeeId: number
    schoolId: number
    _all: number
  }


  export type EmployeeSchoolsAvgAggregateInputType = {
    id?: true
    graduateYear?: true
    employeeId?: true
    schoolId?: true
  }

  export type EmployeeSchoolsSumAggregateInputType = {
    id?: true
    graduateYear?: true
    employeeId?: true
    schoolId?: true
  }

  export type EmployeeSchoolsMinAggregateInputType = {
    id?: true
    graduateYear?: true
    employeeId?: true
    schoolId?: true
  }

  export type EmployeeSchoolsMaxAggregateInputType = {
    id?: true
    graduateYear?: true
    employeeId?: true
    schoolId?: true
  }

  export type EmployeeSchoolsCountAggregateInputType = {
    id?: true
    graduateYear?: true
    employeeId?: true
    schoolId?: true
    _all?: true
  }

  export type EmployeeSchoolsAggregateArgs = {
    /**
     * Filter which EmployeeSchools to aggregate.
     * 
    **/
    where?: EmployeeSchoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSchools to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeSchoolsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EmployeeSchoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSchools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSchools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeSchools
    **/
    _count?: true | EmployeeSchoolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeSchoolsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSchoolsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeSchoolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeSchoolsMaxAggregateInputType
  }

  export type GetEmployeeSchoolsAggregateType<T extends EmployeeSchoolsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeSchools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeSchools[P]>
      : GetScalarType<T[P], AggregateEmployeeSchools[P]>
  }




  export type EmployeeSchoolsGroupByArgs = {
    where?: EmployeeSchoolsWhereInput
    orderBy?: Enumerable<EmployeeSchoolsOrderByWithAggregationInput>
    by: Array<EmployeeSchoolsScalarFieldEnum>
    having?: EmployeeSchoolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeSchoolsCountAggregateInputType | true
    _avg?: EmployeeSchoolsAvgAggregateInputType
    _sum?: EmployeeSchoolsSumAggregateInputType
    _min?: EmployeeSchoolsMinAggregateInputType
    _max?: EmployeeSchoolsMaxAggregateInputType
  }


  export type EmployeeSchoolsGroupByOutputType = {
    id: number
    graduateYear: number
    employeeId: number
    schoolId: number
    _count: EmployeeSchoolsCountAggregateOutputType | null
    _avg: EmployeeSchoolsAvgAggregateOutputType | null
    _sum: EmployeeSchoolsSumAggregateOutputType | null
    _min: EmployeeSchoolsMinAggregateOutputType | null
    _max: EmployeeSchoolsMaxAggregateOutputType | null
  }

  type GetEmployeeSchoolsGroupByPayload<T extends EmployeeSchoolsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EmployeeSchoolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeSchoolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeSchoolsGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeSchoolsGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSchoolsSelect = {
    id?: boolean
    graduateYear?: boolean
    employeeId?: boolean
    schoolId?: boolean
    employeess?: boolean | EmployeesArgs
    schools?: boolean | SchoolsArgs
  }

  export type EmployeeSchoolsInclude = {
    employeess?: boolean | EmployeesArgs
    schools?: boolean | SchoolsArgs
  }

  export type EmployeeSchoolsGetPayload<
    S extends boolean | null | undefined | EmployeeSchoolsArgs,
    U = keyof S
      > = S extends true
        ? EmployeeSchools
    : S extends undefined
    ? never
    : S extends EmployeeSchoolsArgs | EmployeeSchoolsFindManyArgs
    ?'include' extends U
    ? EmployeeSchools  & {
    [P in TrueKeys<S['include']>]:
        P extends 'employeess' ? EmployeesGetPayload<S['include'][P]> :
        P extends 'schools' ? SchoolsGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'employeess' ? EmployeesGetPayload<S['select'][P]> :
        P extends 'schools' ? SchoolsGetPayload<S['select'][P]> :  P extends keyof EmployeeSchools ? EmployeeSchools[P] : never
  } 
    : EmployeeSchools
  : EmployeeSchools


  type EmployeeSchoolsCountArgs = Merge<
    Omit<EmployeeSchoolsFindManyArgs, 'select' | 'include'> & {
      select?: EmployeeSchoolsCountAggregateInputType | true
    }
  >

  export interface EmployeeSchoolsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one EmployeeSchools that matches the filter.
     * @param {EmployeeSchoolsFindUniqueArgs} args - Arguments to find a EmployeeSchools
     * @example
     * // Get one EmployeeSchools
     * const employeeSchools = await prisma.employeeSchools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmployeeSchoolsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EmployeeSchoolsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'EmployeeSchools'> extends True ? CheckSelect<T, Prisma__EmployeeSchoolsClient<EmployeeSchools>, Prisma__EmployeeSchoolsClient<EmployeeSchoolsGetPayload<T>>> : CheckSelect<T, Prisma__EmployeeSchoolsClient<EmployeeSchools | null >, Prisma__EmployeeSchoolsClient<EmployeeSchoolsGetPayload<T> | null >>

    /**
     * Find the first EmployeeSchools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSchoolsFindFirstArgs} args - Arguments to find a EmployeeSchools
     * @example
     * // Get one EmployeeSchools
     * const employeeSchools = await prisma.employeeSchools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmployeeSchoolsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EmployeeSchoolsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'EmployeeSchools'> extends True ? CheckSelect<T, Prisma__EmployeeSchoolsClient<EmployeeSchools>, Prisma__EmployeeSchoolsClient<EmployeeSchoolsGetPayload<T>>> : CheckSelect<T, Prisma__EmployeeSchoolsClient<EmployeeSchools | null >, Prisma__EmployeeSchoolsClient<EmployeeSchoolsGetPayload<T> | null >>

    /**
     * Find zero or more EmployeeSchools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSchoolsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeSchools
     * const employeeSchools = await prisma.employeeSchools.findMany()
     * 
     * // Get first 10 EmployeeSchools
     * const employeeSchools = await prisma.employeeSchools.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeSchoolsWithIdOnly = await prisma.employeeSchools.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmployeeSchoolsFindManyArgs>(
      args?: SelectSubset<T, EmployeeSchoolsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<EmployeeSchools>>, PrismaPromise<Array<EmployeeSchoolsGetPayload<T>>>>

    /**
     * Create a EmployeeSchools.
     * @param {EmployeeSchoolsCreateArgs} args - Arguments to create a EmployeeSchools.
     * @example
     * // Create one EmployeeSchools
     * const EmployeeSchools = await prisma.employeeSchools.create({
     *   data: {
     *     // ... data to create a EmployeeSchools
     *   }
     * })
     * 
    **/
    create<T extends EmployeeSchoolsCreateArgs>(
      args: SelectSubset<T, EmployeeSchoolsCreateArgs>
    ): CheckSelect<T, Prisma__EmployeeSchoolsClient<EmployeeSchools>, Prisma__EmployeeSchoolsClient<EmployeeSchoolsGetPayload<T>>>

    /**
     * Create many EmployeeSchools.
     *     @param {EmployeeSchoolsCreateManyArgs} args - Arguments to create many EmployeeSchools.
     *     @example
     *     // Create many EmployeeSchools
     *     const employeeSchools = await prisma.employeeSchools.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmployeeSchoolsCreateManyArgs>(
      args?: SelectSubset<T, EmployeeSchoolsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a EmployeeSchools.
     * @param {EmployeeSchoolsDeleteArgs} args - Arguments to delete one EmployeeSchools.
     * @example
     * // Delete one EmployeeSchools
     * const EmployeeSchools = await prisma.employeeSchools.delete({
     *   where: {
     *     // ... filter to delete one EmployeeSchools
     *   }
     * })
     * 
    **/
    delete<T extends EmployeeSchoolsDeleteArgs>(
      args: SelectSubset<T, EmployeeSchoolsDeleteArgs>
    ): CheckSelect<T, Prisma__EmployeeSchoolsClient<EmployeeSchools>, Prisma__EmployeeSchoolsClient<EmployeeSchoolsGetPayload<T>>>

    /**
     * Update one EmployeeSchools.
     * @param {EmployeeSchoolsUpdateArgs} args - Arguments to update one EmployeeSchools.
     * @example
     * // Update one EmployeeSchools
     * const employeeSchools = await prisma.employeeSchools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmployeeSchoolsUpdateArgs>(
      args: SelectSubset<T, EmployeeSchoolsUpdateArgs>
    ): CheckSelect<T, Prisma__EmployeeSchoolsClient<EmployeeSchools>, Prisma__EmployeeSchoolsClient<EmployeeSchoolsGetPayload<T>>>

    /**
     * Delete zero or more EmployeeSchools.
     * @param {EmployeeSchoolsDeleteManyArgs} args - Arguments to filter EmployeeSchools to delete.
     * @example
     * // Delete a few EmployeeSchools
     * const { count } = await prisma.employeeSchools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmployeeSchoolsDeleteManyArgs>(
      args?: SelectSubset<T, EmployeeSchoolsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSchoolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeSchools
     * const employeeSchools = await prisma.employeeSchools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmployeeSchoolsUpdateManyArgs>(
      args: SelectSubset<T, EmployeeSchoolsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one EmployeeSchools.
     * @param {EmployeeSchoolsUpsertArgs} args - Arguments to update or create a EmployeeSchools.
     * @example
     * // Update or create a EmployeeSchools
     * const employeeSchools = await prisma.employeeSchools.upsert({
     *   create: {
     *     // ... data to create a EmployeeSchools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeSchools we want to update
     *   }
     * })
    **/
    upsert<T extends EmployeeSchoolsUpsertArgs>(
      args: SelectSubset<T, EmployeeSchoolsUpsertArgs>
    ): CheckSelect<T, Prisma__EmployeeSchoolsClient<EmployeeSchools>, Prisma__EmployeeSchoolsClient<EmployeeSchoolsGetPayload<T>>>

    /**
     * Count the number of EmployeeSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSchoolsCountArgs} args - Arguments to filter EmployeeSchools to count.
     * @example
     * // Count the number of EmployeeSchools
     * const count = await prisma.employeeSchools.count({
     *   where: {
     *     // ... the filter for the EmployeeSchools we want to count
     *   }
     * })
    **/
    count<T extends EmployeeSchoolsCountArgs>(
      args?: Subset<T, EmployeeSchoolsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeSchoolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSchoolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeSchoolsAggregateArgs>(args: Subset<T, EmployeeSchoolsAggregateArgs>): PrismaPromise<GetEmployeeSchoolsAggregateType<T>>

    /**
     * Group by EmployeeSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSchoolsGroupByArgs} args - Group by arguments.
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
      T extends EmployeeSchoolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeSchoolsGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeSchoolsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmployeeSchoolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeSchoolsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeSchools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EmployeeSchoolsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    employeess<T extends EmployeesArgs = {}>(args?: Subset<T, EmployeesArgs>): CheckSelect<T, Prisma__EmployeesClient<Employees | null >, Prisma__EmployeesClient<EmployeesGetPayload<T> | null >>;

    schools<T extends SchoolsArgs = {}>(args?: Subset<T, SchoolsArgs>): CheckSelect<T, Prisma__SchoolsClient<Schools | null >, Prisma__SchoolsClient<SchoolsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * EmployeeSchools findUnique
   */
  export type EmployeeSchoolsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the EmployeeSchools
     * 
    **/
    select?: EmployeeSchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeSchoolsInclude | null
    /**
     * Throw an Error if a EmployeeSchools can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which EmployeeSchools to fetch.
     * 
    **/
    where: EmployeeSchoolsWhereUniqueInput
  }


  /**
   * EmployeeSchools findFirst
   */
  export type EmployeeSchoolsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the EmployeeSchools
     * 
    **/
    select?: EmployeeSchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeSchoolsInclude | null
    /**
     * Throw an Error if a EmployeeSchools can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which EmployeeSchools to fetch.
     * 
    **/
    where?: EmployeeSchoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSchools to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeSchoolsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeSchools.
     * 
    **/
    cursor?: EmployeeSchoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSchools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSchools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeSchools.
     * 
    **/
    distinct?: Enumerable<EmployeeSchoolsScalarFieldEnum>
  }


  /**
   * EmployeeSchools findMany
   */
  export type EmployeeSchoolsFindManyArgs = {
    /**
     * Select specific fields to fetch from the EmployeeSchools
     * 
    **/
    select?: EmployeeSchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeSchoolsInclude | null
    /**
     * Filter, which EmployeeSchools to fetch.
     * 
    **/
    where?: EmployeeSchoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSchools to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeSchoolsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeSchools.
     * 
    **/
    cursor?: EmployeeSchoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSchools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSchools.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EmployeeSchoolsScalarFieldEnum>
  }


  /**
   * EmployeeSchools create
   */
  export type EmployeeSchoolsCreateArgs = {
    /**
     * Select specific fields to fetch from the EmployeeSchools
     * 
    **/
    select?: EmployeeSchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeSchoolsInclude | null
    /**
     * The data needed to create a EmployeeSchools.
     * 
    **/
    data: XOR<EmployeeSchoolsCreateInput, EmployeeSchoolsUncheckedCreateInput>
  }


  /**
   * EmployeeSchools createMany
   */
  export type EmployeeSchoolsCreateManyArgs = {
    /**
     * The data used to create many EmployeeSchools.
     * 
    **/
    data: Enumerable<EmployeeSchoolsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * EmployeeSchools update
   */
  export type EmployeeSchoolsUpdateArgs = {
    /**
     * Select specific fields to fetch from the EmployeeSchools
     * 
    **/
    select?: EmployeeSchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeSchoolsInclude | null
    /**
     * The data needed to update a EmployeeSchools.
     * 
    **/
    data: XOR<EmployeeSchoolsUpdateInput, EmployeeSchoolsUncheckedUpdateInput>
    /**
     * Choose, which EmployeeSchools to update.
     * 
    **/
    where: EmployeeSchoolsWhereUniqueInput
  }


  /**
   * EmployeeSchools updateMany
   */
  export type EmployeeSchoolsUpdateManyArgs = {
    /**
     * The data used to update EmployeeSchools.
     * 
    **/
    data: XOR<EmployeeSchoolsUpdateManyMutationInput, EmployeeSchoolsUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeSchools to update
     * 
    **/
    where?: EmployeeSchoolsWhereInput
  }


  /**
   * EmployeeSchools upsert
   */
  export type EmployeeSchoolsUpsertArgs = {
    /**
     * Select specific fields to fetch from the EmployeeSchools
     * 
    **/
    select?: EmployeeSchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeSchoolsInclude | null
    /**
     * The filter to search for the EmployeeSchools to update in case it exists.
     * 
    **/
    where: EmployeeSchoolsWhereUniqueInput
    /**
     * In case the EmployeeSchools found by the `where` argument doesn't exist, create a new EmployeeSchools with this data.
     * 
    **/
    create: XOR<EmployeeSchoolsCreateInput, EmployeeSchoolsUncheckedCreateInput>
    /**
     * In case the EmployeeSchools was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EmployeeSchoolsUpdateInput, EmployeeSchoolsUncheckedUpdateInput>
  }


  /**
   * EmployeeSchools delete
   */
  export type EmployeeSchoolsDeleteArgs = {
    /**
     * Select specific fields to fetch from the EmployeeSchools
     * 
    **/
    select?: EmployeeSchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeSchoolsInclude | null
    /**
     * Filter which EmployeeSchools to delete.
     * 
    **/
    where: EmployeeSchoolsWhereUniqueInput
  }


  /**
   * EmployeeSchools deleteMany
   */
  export type EmployeeSchoolsDeleteManyArgs = {
    /**
     * Filter which EmployeeSchools to delete
     * 
    **/
    where?: EmployeeSchoolsWhereInput
  }


  /**
   * EmployeeSchools without action
   */
  export type EmployeeSchoolsArgs = {
    /**
     * Select specific fields to fetch from the EmployeeSchools
     * 
    **/
    select?: EmployeeSchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeSchoolsInclude | null
  }



  /**
   * Model Schools
   */


  export type AggregateSchools = {
    _count: SchoolsCountAggregateOutputType | null
    _avg: SchoolsAvgAggregateOutputType | null
    _sum: SchoolsSumAggregateOutputType | null
    _min: SchoolsMinAggregateOutputType | null
    _max: SchoolsMaxAggregateOutputType | null
  }

  export type SchoolsAvgAggregateOutputType = {
    id: number | null
  }

  export type SchoolsSumAggregateOutputType = {
    id: number | null
  }

  export type SchoolsMinAggregateOutputType = {
    id: number | null
    name: string | null
    level: SchoolLevel | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    level: SchoolLevel | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolsCountAggregateOutputType = {
    id: number
    name: number
    level: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchoolsAvgAggregateInputType = {
    id?: true
  }

  export type SchoolsSumAggregateInputType = {
    id?: true
  }

  export type SchoolsMinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolsMaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolsCountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchoolsAggregateArgs = {
    /**
     * Filter which Schools to aggregate.
     * 
    **/
    where?: SchoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     * 
    **/
    orderBy?: Enumerable<SchoolsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SchoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolsMaxAggregateInputType
  }

  export type GetSchoolsAggregateType<T extends SchoolsAggregateArgs> = {
        [P in keyof T & keyof AggregateSchools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchools[P]>
      : GetScalarType<T[P], AggregateSchools[P]>
  }




  export type SchoolsGroupByArgs = {
    where?: SchoolsWhereInput
    orderBy?: Enumerable<SchoolsOrderByWithAggregationInput>
    by: Array<SchoolsScalarFieldEnum>
    having?: SchoolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolsCountAggregateInputType | true
    _avg?: SchoolsAvgAggregateInputType
    _sum?: SchoolsSumAggregateInputType
    _min?: SchoolsMinAggregateInputType
    _max?: SchoolsMaxAggregateInputType
  }


  export type SchoolsGroupByOutputType = {
    id: number
    name: string
    level: SchoolLevel
    address: string
    createdAt: Date
    updatedAt: Date
    _count: SchoolsCountAggregateOutputType | null
    _avg: SchoolsAvgAggregateOutputType | null
    _sum: SchoolsSumAggregateOutputType | null
    _min: SchoolsMinAggregateOutputType | null
    _max: SchoolsMaxAggregateOutputType | null
  }

  type GetSchoolsGroupByPayload<T extends SchoolsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SchoolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolsGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolsGroupByOutputType[P]>
        }
      >
    >


  export type SchoolsSelect = {
    id?: boolean
    name?: boolean
    level?: boolean
    address?: boolean
    employees?: boolean | EmployeeSchoolsFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | SchoolsCountOutputTypeArgs
  }

  export type SchoolsInclude = {
    employees?: boolean | EmployeeSchoolsFindManyArgs
    _count?: boolean | SchoolsCountOutputTypeArgs
  }

  export type SchoolsGetPayload<
    S extends boolean | null | undefined | SchoolsArgs,
    U = keyof S
      > = S extends true
        ? Schools
    : S extends undefined
    ? never
    : S extends SchoolsArgs | SchoolsFindManyArgs
    ?'include' extends U
    ? Schools  & {
    [P in TrueKeys<S['include']>]:
        P extends 'employees' ? Array < EmployeeSchoolsGetPayload<S['include'][P]>>  :
        P extends '_count' ? SchoolsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'employees' ? Array < EmployeeSchoolsGetPayload<S['select'][P]>>  :
        P extends '_count' ? SchoolsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Schools ? Schools[P] : never
  } 
    : Schools
  : Schools


  type SchoolsCountArgs = Merge<
    Omit<SchoolsFindManyArgs, 'select' | 'include'> & {
      select?: SchoolsCountAggregateInputType | true
    }
  >

  export interface SchoolsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Schools that matches the filter.
     * @param {SchoolsFindUniqueArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SchoolsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SchoolsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Schools'> extends True ? CheckSelect<T, Prisma__SchoolsClient<Schools>, Prisma__SchoolsClient<SchoolsGetPayload<T>>> : CheckSelect<T, Prisma__SchoolsClient<Schools | null >, Prisma__SchoolsClient<SchoolsGetPayload<T> | null >>

    /**
     * Find the first Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsFindFirstArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SchoolsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SchoolsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Schools'> extends True ? CheckSelect<T, Prisma__SchoolsClient<Schools>, Prisma__SchoolsClient<SchoolsGetPayload<T>>> : CheckSelect<T, Prisma__SchoolsClient<Schools | null >, Prisma__SchoolsClient<SchoolsGetPayload<T> | null >>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.schools.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.schools.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolsWithIdOnly = await prisma.schools.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SchoolsFindManyArgs>(
      args?: SelectSubset<T, SchoolsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Schools>>, PrismaPromise<Array<SchoolsGetPayload<T>>>>

    /**
     * Create a Schools.
     * @param {SchoolsCreateArgs} args - Arguments to create a Schools.
     * @example
     * // Create one Schools
     * const Schools = await prisma.schools.create({
     *   data: {
     *     // ... data to create a Schools
     *   }
     * })
     * 
    **/
    create<T extends SchoolsCreateArgs>(
      args: SelectSubset<T, SchoolsCreateArgs>
    ): CheckSelect<T, Prisma__SchoolsClient<Schools>, Prisma__SchoolsClient<SchoolsGetPayload<T>>>

    /**
     * Create many Schools.
     *     @param {SchoolsCreateManyArgs} args - Arguments to create many Schools.
     *     @example
     *     // Create many Schools
     *     const schools = await prisma.schools.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SchoolsCreateManyArgs>(
      args?: SelectSubset<T, SchoolsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Schools.
     * @param {SchoolsDeleteArgs} args - Arguments to delete one Schools.
     * @example
     * // Delete one Schools
     * const Schools = await prisma.schools.delete({
     *   where: {
     *     // ... filter to delete one Schools
     *   }
     * })
     * 
    **/
    delete<T extends SchoolsDeleteArgs>(
      args: SelectSubset<T, SchoolsDeleteArgs>
    ): CheckSelect<T, Prisma__SchoolsClient<Schools>, Prisma__SchoolsClient<SchoolsGetPayload<T>>>

    /**
     * Update one Schools.
     * @param {SchoolsUpdateArgs} args - Arguments to update one Schools.
     * @example
     * // Update one Schools
     * const schools = await prisma.schools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SchoolsUpdateArgs>(
      args: SelectSubset<T, SchoolsUpdateArgs>
    ): CheckSelect<T, Prisma__SchoolsClient<Schools>, Prisma__SchoolsClient<SchoolsGetPayload<T>>>

    /**
     * Delete zero or more Schools.
     * @param {SchoolsDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.schools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SchoolsDeleteManyArgs>(
      args?: SelectSubset<T, SchoolsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const schools = await prisma.schools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SchoolsUpdateManyArgs>(
      args: SelectSubset<T, SchoolsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Schools.
     * @param {SchoolsUpsertArgs} args - Arguments to update or create a Schools.
     * @example
     * // Update or create a Schools
     * const schools = await prisma.schools.upsert({
     *   create: {
     *     // ... data to create a Schools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schools we want to update
     *   }
     * })
    **/
    upsert<T extends SchoolsUpsertArgs>(
      args: SelectSubset<T, SchoolsUpsertArgs>
    ): CheckSelect<T, Prisma__SchoolsClient<Schools>, Prisma__SchoolsClient<SchoolsGetPayload<T>>>

    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.schools.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolsCountArgs>(
      args?: Subset<T, SchoolsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolsAggregateArgs>(args: Subset<T, SchoolsAggregateArgs>): PrismaPromise<GetSchoolsAggregateType<T>>

    /**
     * Group by Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsGroupByArgs} args - Group by arguments.
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
      T extends SchoolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolsGroupByArgs['orderBy'] }
        : { orderBy?: SchoolsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SchoolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SchoolsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    employees<T extends EmployeeSchoolsFindManyArgs = {}>(args?: Subset<T, EmployeeSchoolsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<EmployeeSchools>>, PrismaPromise<Array<EmployeeSchoolsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Schools findUnique
   */
  export type SchoolsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
    /**
     * Throw an Error if a Schools can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Schools to fetch.
     * 
    **/
    where: SchoolsWhereUniqueInput
  }


  /**
   * Schools findFirst
   */
  export type SchoolsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
    /**
     * Throw an Error if a Schools can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Schools to fetch.
     * 
    **/
    where?: SchoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     * 
    **/
    orderBy?: Enumerable<SchoolsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     * 
    **/
    cursor?: SchoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     * 
    **/
    distinct?: Enumerable<SchoolsScalarFieldEnum>
  }


  /**
   * Schools findMany
   */
  export type SchoolsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
    /**
     * Filter, which Schools to fetch.
     * 
    **/
    where?: SchoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     * 
    **/
    orderBy?: Enumerable<SchoolsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     * 
    **/
    cursor?: SchoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SchoolsScalarFieldEnum>
  }


  /**
   * Schools create
   */
  export type SchoolsCreateArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
    /**
     * The data needed to create a Schools.
     * 
    **/
    data: XOR<SchoolsCreateInput, SchoolsUncheckedCreateInput>
  }


  /**
   * Schools createMany
   */
  export type SchoolsCreateManyArgs = {
    /**
     * The data used to create many Schools.
     * 
    **/
    data: Enumerable<SchoolsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Schools update
   */
  export type SchoolsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
    /**
     * The data needed to update a Schools.
     * 
    **/
    data: XOR<SchoolsUpdateInput, SchoolsUncheckedUpdateInput>
    /**
     * Choose, which Schools to update.
     * 
    **/
    where: SchoolsWhereUniqueInput
  }


  /**
   * Schools updateMany
   */
  export type SchoolsUpdateManyArgs = {
    /**
     * The data used to update Schools.
     * 
    **/
    data: XOR<SchoolsUpdateManyMutationInput, SchoolsUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     * 
    **/
    where?: SchoolsWhereInput
  }


  /**
   * Schools upsert
   */
  export type SchoolsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
    /**
     * The filter to search for the Schools to update in case it exists.
     * 
    **/
    where: SchoolsWhereUniqueInput
    /**
     * In case the Schools found by the `where` argument doesn't exist, create a new Schools with this data.
     * 
    **/
    create: XOR<SchoolsCreateInput, SchoolsUncheckedCreateInput>
    /**
     * In case the Schools was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SchoolsUpdateInput, SchoolsUncheckedUpdateInput>
  }


  /**
   * Schools delete
   */
  export type SchoolsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
    /**
     * Filter which Schools to delete.
     * 
    **/
    where: SchoolsWhereUniqueInput
  }


  /**
   * Schools deleteMany
   */
  export type SchoolsDeleteManyArgs = {
    /**
     * Filter which Schools to delete
     * 
    **/
    where?: SchoolsWhereInput
  }


  /**
   * Schools without action
   */
  export type SchoolsArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
  }



  /**
   * Model Teams
   */


  export type AggregateTeams = {
    _count: TeamsCountAggregateOutputType | null
    _avg: TeamsAvgAggregateOutputType | null
    _sum: TeamsSumAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  export type TeamsAvgAggregateOutputType = {
    id: number | null
  }

  export type TeamsSumAggregateOutputType = {
    id: number | null
  }

  export type TeamsMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    address: string | null
    image: string | null
  }

  export type TeamsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    address: string | null
    image: string | null
  }

  export type TeamsCountAggregateOutputType = {
    id: number
    name: number
    code: number
    address: number
    image: number
    _all: number
  }


  export type TeamsAvgAggregateInputType = {
    id?: true
  }

  export type TeamsSumAggregateInputType = {
    id?: true
  }

  export type TeamsMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    address?: true
    image?: true
  }

  export type TeamsMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    address?: true
    image?: true
  }

  export type TeamsCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    address?: true
    image?: true
    _all?: true
  }

  export type TeamsAggregateArgs = {
    /**
     * Filter which Teams to aggregate.
     * 
    **/
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     * 
    **/
    orderBy?: Enumerable<TeamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsMaxAggregateInputType
  }

  export type GetTeamsAggregateType<T extends TeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeams[P]>
      : GetScalarType<T[P], AggregateTeams[P]>
  }




  export type TeamsGroupByArgs = {
    where?: TeamsWhereInput
    orderBy?: Enumerable<TeamsOrderByWithAggregationInput>
    by: Array<TeamsScalarFieldEnum>
    having?: TeamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsCountAggregateInputType | true
    _avg?: TeamsAvgAggregateInputType
    _sum?: TeamsSumAggregateInputType
    _min?: TeamsMinAggregateInputType
    _max?: TeamsMaxAggregateInputType
  }


  export type TeamsGroupByOutputType = {
    id: number
    name: string
    code: string
    address: string | null
    image: string | null
    _count: TeamsCountAggregateOutputType | null
    _avg: TeamsAvgAggregateOutputType | null
    _sum: TeamsSumAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  type GetTeamsGroupByPayload<T extends TeamsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsGroupByOutputType[P]>
        }
      >
    >


  export type TeamsSelect = {
    id?: boolean
    name?: boolean
    code?: boolean
    employees?: boolean | EmployeeTeamsFindManyArgs
    address?: boolean
    image?: boolean
    _count?: boolean | TeamsCountOutputTypeArgs
  }

  export type TeamsInclude = {
    employees?: boolean | EmployeeTeamsFindManyArgs
    _count?: boolean | TeamsCountOutputTypeArgs
  }

  export type TeamsGetPayload<
    S extends boolean | null | undefined | TeamsArgs,
    U = keyof S
      > = S extends true
        ? Teams
    : S extends undefined
    ? never
    : S extends TeamsArgs | TeamsFindManyArgs
    ?'include' extends U
    ? Teams  & {
    [P in TrueKeys<S['include']>]:
        P extends 'employees' ? Array < EmployeeTeamsGetPayload<S['include'][P]>>  :
        P extends '_count' ? TeamsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'employees' ? Array < EmployeeTeamsGetPayload<S['select'][P]>>  :
        P extends '_count' ? TeamsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Teams ? Teams[P] : never
  } 
    : Teams
  : Teams


  type TeamsCountArgs = Merge<
    Omit<TeamsFindManyArgs, 'select' | 'include'> & {
      select?: TeamsCountAggregateInputType | true
    }
  >

  export interface TeamsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Teams that matches the filter.
     * @param {TeamsFindUniqueArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TeamsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Teams'> extends True ? CheckSelect<T, Prisma__TeamsClient<Teams>, Prisma__TeamsClient<TeamsGetPayload<T>>> : CheckSelect<T, Prisma__TeamsClient<Teams | null >, Prisma__TeamsClient<TeamsGetPayload<T> | null >>

    /**
     * Find the first Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TeamsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Teams'> extends True ? CheckSelect<T, Prisma__TeamsClient<Teams>, Prisma__TeamsClient<TeamsGetPayload<T>>> : CheckSelect<T, Prisma__TeamsClient<Teams | null >, Prisma__TeamsClient<TeamsGetPayload<T> | null >>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.teams.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.teams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsWithIdOnly = await prisma.teams.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamsFindManyArgs>(
      args?: SelectSubset<T, TeamsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Teams>>, PrismaPromise<Array<TeamsGetPayload<T>>>>

    /**
     * Create a Teams.
     * @param {TeamsCreateArgs} args - Arguments to create a Teams.
     * @example
     * // Create one Teams
     * const Teams = await prisma.teams.create({
     *   data: {
     *     // ... data to create a Teams
     *   }
     * })
     * 
    **/
    create<T extends TeamsCreateArgs>(
      args: SelectSubset<T, TeamsCreateArgs>
    ): CheckSelect<T, Prisma__TeamsClient<Teams>, Prisma__TeamsClient<TeamsGetPayload<T>>>

    /**
     * Create many Teams.
     *     @param {TeamsCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const teams = await prisma.teams.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamsCreateManyArgs>(
      args?: SelectSubset<T, TeamsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Teams.
     * @param {TeamsDeleteArgs} args - Arguments to delete one Teams.
     * @example
     * // Delete one Teams
     * const Teams = await prisma.teams.delete({
     *   where: {
     *     // ... filter to delete one Teams
     *   }
     * })
     * 
    **/
    delete<T extends TeamsDeleteArgs>(
      args: SelectSubset<T, TeamsDeleteArgs>
    ): CheckSelect<T, Prisma__TeamsClient<Teams>, Prisma__TeamsClient<TeamsGetPayload<T>>>

    /**
     * Update one Teams.
     * @param {TeamsUpdateArgs} args - Arguments to update one Teams.
     * @example
     * // Update one Teams
     * const teams = await prisma.teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamsUpdateArgs>(
      args: SelectSubset<T, TeamsUpdateArgs>
    ): CheckSelect<T, Prisma__TeamsClient<Teams>, Prisma__TeamsClient<TeamsGetPayload<T>>>

    /**
     * Delete zero or more Teams.
     * @param {TeamsDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamsDeleteManyArgs>(
      args?: SelectSubset<T, TeamsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamsUpdateManyArgs>(
      args: SelectSubset<T, TeamsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Teams.
     * @param {TeamsUpsertArgs} args - Arguments to update or create a Teams.
     * @example
     * // Update or create a Teams
     * const teams = await prisma.teams.upsert({
     *   create: {
     *     // ... data to create a Teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teams we want to update
     *   }
     * })
    **/
    upsert<T extends TeamsUpsertArgs>(
      args: SelectSubset<T, TeamsUpsertArgs>
    ): CheckSelect<T, Prisma__TeamsClient<Teams>, Prisma__TeamsClient<TeamsGetPayload<T>>>

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.teams.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamsCountArgs>(
      args?: Subset<T, TeamsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamsAggregateArgs>(args: Subset<T, TeamsAggregateArgs>): PrismaPromise<GetTeamsAggregateType<T>>

    /**
     * Group by Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsGroupByArgs} args - Group by arguments.
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
      T extends TeamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamsGroupByArgs['orderBy'] }
        : { orderBy?: TeamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TeamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TeamsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    employees<T extends EmployeeTeamsFindManyArgs = {}>(args?: Subset<T, EmployeeTeamsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<EmployeeTeams>>, PrismaPromise<Array<EmployeeTeamsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Teams findUnique
   */
  export type TeamsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * Throw an Error if a Teams can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Teams to fetch.
     * 
    **/
    where: TeamsWhereUniqueInput
  }


  /**
   * Teams findFirst
   */
  export type TeamsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * Throw an Error if a Teams can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Teams to fetch.
     * 
    **/
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     * 
    **/
    orderBy?: Enumerable<TeamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     * 
    **/
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     * 
    **/
    distinct?: Enumerable<TeamsScalarFieldEnum>
  }


  /**
   * Teams findMany
   */
  export type TeamsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * Filter, which Teams to fetch.
     * 
    **/
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     * 
    **/
    orderBy?: Enumerable<TeamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     * 
    **/
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TeamsScalarFieldEnum>
  }


  /**
   * Teams create
   */
  export type TeamsCreateArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * The data needed to create a Teams.
     * 
    **/
    data: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
  }


  /**
   * Teams createMany
   */
  export type TeamsCreateManyArgs = {
    /**
     * The data used to create many Teams.
     * 
    **/
    data: Enumerable<TeamsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Teams update
   */
  export type TeamsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * The data needed to update a Teams.
     * 
    **/
    data: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
    /**
     * Choose, which Teams to update.
     * 
    **/
    where: TeamsWhereUniqueInput
  }


  /**
   * Teams updateMany
   */
  export type TeamsUpdateManyArgs = {
    /**
     * The data used to update Teams.
     * 
    **/
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     * 
    **/
    where?: TeamsWhereInput
  }


  /**
   * Teams upsert
   */
  export type TeamsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * The filter to search for the Teams to update in case it exists.
     * 
    **/
    where: TeamsWhereUniqueInput
    /**
     * In case the Teams found by the `where` argument doesn't exist, create a new Teams with this data.
     * 
    **/
    create: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
    /**
     * In case the Teams was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
  }


  /**
   * Teams delete
   */
  export type TeamsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
    /**
     * Filter which Teams to delete.
     * 
    **/
    where: TeamsWhereUniqueInput
  }


  /**
   * Teams deleteMany
   */
  export type TeamsDeleteManyArgs = {
    /**
     * Filter which Teams to delete
     * 
    **/
    where?: TeamsWhereInput
  }


  /**
   * Teams without action
   */
  export type TeamsArgs = {
    /**
     * Select specific fields to fetch from the Teams
     * 
    **/
    select?: TeamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeamsInclude | null
  }



  /**
   * Model EmployeeRoles
   */


  export type AggregateEmployeeRoles = {
    _count: EmployeeRolesCountAggregateOutputType | null
    _avg: EmployeeRolesAvgAggregateOutputType | null
    _sum: EmployeeRolesSumAggregateOutputType | null
    _min: EmployeeRolesMinAggregateOutputType | null
    _max: EmployeeRolesMaxAggregateOutputType | null
  }

  export type EmployeeRolesAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
    roleId: number | null
  }

  export type EmployeeRolesSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
    roleId: number | null
  }

  export type EmployeeRolesMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    roleId: number | null
  }

  export type EmployeeRolesMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    roleId: number | null
  }

  export type EmployeeRolesCountAggregateOutputType = {
    id: number
    employeeId: number
    roleId: number
    _all: number
  }


  export type EmployeeRolesAvgAggregateInputType = {
    id?: true
    employeeId?: true
    roleId?: true
  }

  export type EmployeeRolesSumAggregateInputType = {
    id?: true
    employeeId?: true
    roleId?: true
  }

  export type EmployeeRolesMinAggregateInputType = {
    id?: true
    employeeId?: true
    roleId?: true
  }

  export type EmployeeRolesMaxAggregateInputType = {
    id?: true
    employeeId?: true
    roleId?: true
  }

  export type EmployeeRolesCountAggregateInputType = {
    id?: true
    employeeId?: true
    roleId?: true
    _all?: true
  }

  export type EmployeeRolesAggregateArgs = {
    /**
     * Filter which EmployeeRoles to aggregate.
     * 
    **/
    where?: EmployeeRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeRoles to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeRolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EmployeeRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeRoles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeRoles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeRoles
    **/
    _count?: true | EmployeeRolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeRolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeRolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeRolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeRolesMaxAggregateInputType
  }

  export type GetEmployeeRolesAggregateType<T extends EmployeeRolesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeRoles[P]>
      : GetScalarType<T[P], AggregateEmployeeRoles[P]>
  }




  export type EmployeeRolesGroupByArgs = {
    where?: EmployeeRolesWhereInput
    orderBy?: Enumerable<EmployeeRolesOrderByWithAggregationInput>
    by: Array<EmployeeRolesScalarFieldEnum>
    having?: EmployeeRolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeRolesCountAggregateInputType | true
    _avg?: EmployeeRolesAvgAggregateInputType
    _sum?: EmployeeRolesSumAggregateInputType
    _min?: EmployeeRolesMinAggregateInputType
    _max?: EmployeeRolesMaxAggregateInputType
  }


  export type EmployeeRolesGroupByOutputType = {
    id: number
    employeeId: number
    roleId: number
    _count: EmployeeRolesCountAggregateOutputType | null
    _avg: EmployeeRolesAvgAggregateOutputType | null
    _sum: EmployeeRolesSumAggregateOutputType | null
    _min: EmployeeRolesMinAggregateOutputType | null
    _max: EmployeeRolesMaxAggregateOutputType | null
  }

  type GetEmployeeRolesGroupByPayload<T extends EmployeeRolesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EmployeeRolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeRolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeRolesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeRolesGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeRolesSelect = {
    id?: boolean
    employeeId?: boolean
    roleId?: boolean
    employees?: boolean | EmployeesArgs
    roles?: boolean | RolesArgs
  }

  export type EmployeeRolesInclude = {
    employees?: boolean | EmployeesArgs
    roles?: boolean | RolesArgs
  }

  export type EmployeeRolesGetPayload<
    S extends boolean | null | undefined | EmployeeRolesArgs,
    U = keyof S
      > = S extends true
        ? EmployeeRoles
    : S extends undefined
    ? never
    : S extends EmployeeRolesArgs | EmployeeRolesFindManyArgs
    ?'include' extends U
    ? EmployeeRoles  & {
    [P in TrueKeys<S['include']>]:
        P extends 'employees' ? EmployeesGetPayload<S['include'][P]> :
        P extends 'roles' ? RolesGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'employees' ? EmployeesGetPayload<S['select'][P]> :
        P extends 'roles' ? RolesGetPayload<S['select'][P]> :  P extends keyof EmployeeRoles ? EmployeeRoles[P] : never
  } 
    : EmployeeRoles
  : EmployeeRoles


  type EmployeeRolesCountArgs = Merge<
    Omit<EmployeeRolesFindManyArgs, 'select' | 'include'> & {
      select?: EmployeeRolesCountAggregateInputType | true
    }
  >

  export interface EmployeeRolesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one EmployeeRoles that matches the filter.
     * @param {EmployeeRolesFindUniqueArgs} args - Arguments to find a EmployeeRoles
     * @example
     * // Get one EmployeeRoles
     * const employeeRoles = await prisma.employeeRoles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmployeeRolesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EmployeeRolesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'EmployeeRoles'> extends True ? CheckSelect<T, Prisma__EmployeeRolesClient<EmployeeRoles>, Prisma__EmployeeRolesClient<EmployeeRolesGetPayload<T>>> : CheckSelect<T, Prisma__EmployeeRolesClient<EmployeeRoles | null >, Prisma__EmployeeRolesClient<EmployeeRolesGetPayload<T> | null >>

    /**
     * Find the first EmployeeRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeRolesFindFirstArgs} args - Arguments to find a EmployeeRoles
     * @example
     * // Get one EmployeeRoles
     * const employeeRoles = await prisma.employeeRoles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmployeeRolesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EmployeeRolesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'EmployeeRoles'> extends True ? CheckSelect<T, Prisma__EmployeeRolesClient<EmployeeRoles>, Prisma__EmployeeRolesClient<EmployeeRolesGetPayload<T>>> : CheckSelect<T, Prisma__EmployeeRolesClient<EmployeeRoles | null >, Prisma__EmployeeRolesClient<EmployeeRolesGetPayload<T> | null >>

    /**
     * Find zero or more EmployeeRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeRolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeRoles
     * const employeeRoles = await prisma.employeeRoles.findMany()
     * 
     * // Get first 10 EmployeeRoles
     * const employeeRoles = await prisma.employeeRoles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeRolesWithIdOnly = await prisma.employeeRoles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmployeeRolesFindManyArgs>(
      args?: SelectSubset<T, EmployeeRolesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<EmployeeRoles>>, PrismaPromise<Array<EmployeeRolesGetPayload<T>>>>

    /**
     * Create a EmployeeRoles.
     * @param {EmployeeRolesCreateArgs} args - Arguments to create a EmployeeRoles.
     * @example
     * // Create one EmployeeRoles
     * const EmployeeRoles = await prisma.employeeRoles.create({
     *   data: {
     *     // ... data to create a EmployeeRoles
     *   }
     * })
     * 
    **/
    create<T extends EmployeeRolesCreateArgs>(
      args: SelectSubset<T, EmployeeRolesCreateArgs>
    ): CheckSelect<T, Prisma__EmployeeRolesClient<EmployeeRoles>, Prisma__EmployeeRolesClient<EmployeeRolesGetPayload<T>>>

    /**
     * Create many EmployeeRoles.
     *     @param {EmployeeRolesCreateManyArgs} args - Arguments to create many EmployeeRoles.
     *     @example
     *     // Create many EmployeeRoles
     *     const employeeRoles = await prisma.employeeRoles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmployeeRolesCreateManyArgs>(
      args?: SelectSubset<T, EmployeeRolesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a EmployeeRoles.
     * @param {EmployeeRolesDeleteArgs} args - Arguments to delete one EmployeeRoles.
     * @example
     * // Delete one EmployeeRoles
     * const EmployeeRoles = await prisma.employeeRoles.delete({
     *   where: {
     *     // ... filter to delete one EmployeeRoles
     *   }
     * })
     * 
    **/
    delete<T extends EmployeeRolesDeleteArgs>(
      args: SelectSubset<T, EmployeeRolesDeleteArgs>
    ): CheckSelect<T, Prisma__EmployeeRolesClient<EmployeeRoles>, Prisma__EmployeeRolesClient<EmployeeRolesGetPayload<T>>>

    /**
     * Update one EmployeeRoles.
     * @param {EmployeeRolesUpdateArgs} args - Arguments to update one EmployeeRoles.
     * @example
     * // Update one EmployeeRoles
     * const employeeRoles = await prisma.employeeRoles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmployeeRolesUpdateArgs>(
      args: SelectSubset<T, EmployeeRolesUpdateArgs>
    ): CheckSelect<T, Prisma__EmployeeRolesClient<EmployeeRoles>, Prisma__EmployeeRolesClient<EmployeeRolesGetPayload<T>>>

    /**
     * Delete zero or more EmployeeRoles.
     * @param {EmployeeRolesDeleteManyArgs} args - Arguments to filter EmployeeRoles to delete.
     * @example
     * // Delete a few EmployeeRoles
     * const { count } = await prisma.employeeRoles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmployeeRolesDeleteManyArgs>(
      args?: SelectSubset<T, EmployeeRolesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeRolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeRoles
     * const employeeRoles = await prisma.employeeRoles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmployeeRolesUpdateManyArgs>(
      args: SelectSubset<T, EmployeeRolesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one EmployeeRoles.
     * @param {EmployeeRolesUpsertArgs} args - Arguments to update or create a EmployeeRoles.
     * @example
     * // Update or create a EmployeeRoles
     * const employeeRoles = await prisma.employeeRoles.upsert({
     *   create: {
     *     // ... data to create a EmployeeRoles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeRoles we want to update
     *   }
     * })
    **/
    upsert<T extends EmployeeRolesUpsertArgs>(
      args: SelectSubset<T, EmployeeRolesUpsertArgs>
    ): CheckSelect<T, Prisma__EmployeeRolesClient<EmployeeRoles>, Prisma__EmployeeRolesClient<EmployeeRolesGetPayload<T>>>

    /**
     * Count the number of EmployeeRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeRolesCountArgs} args - Arguments to filter EmployeeRoles to count.
     * @example
     * // Count the number of EmployeeRoles
     * const count = await prisma.employeeRoles.count({
     *   where: {
     *     // ... the filter for the EmployeeRoles we want to count
     *   }
     * })
    **/
    count<T extends EmployeeRolesCountArgs>(
      args?: Subset<T, EmployeeRolesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeRolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeRolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeRolesAggregateArgs>(args: Subset<T, EmployeeRolesAggregateArgs>): PrismaPromise<GetEmployeeRolesAggregateType<T>>

    /**
     * Group by EmployeeRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeRolesGroupByArgs} args - Group by arguments.
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
      T extends EmployeeRolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeRolesGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeRolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmployeeRolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeRolesGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeRoles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EmployeeRolesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    employees<T extends EmployeesArgs = {}>(args?: Subset<T, EmployeesArgs>): CheckSelect<T, Prisma__EmployeesClient<Employees | null >, Prisma__EmployeesClient<EmployeesGetPayload<T> | null >>;

    roles<T extends RolesArgs = {}>(args?: Subset<T, RolesArgs>): CheckSelect<T, Prisma__RolesClient<Roles | null >, Prisma__RolesClient<RolesGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * EmployeeRoles findUnique
   */
  export type EmployeeRolesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the EmployeeRoles
     * 
    **/
    select?: EmployeeRolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeRolesInclude | null
    /**
     * Throw an Error if a EmployeeRoles can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which EmployeeRoles to fetch.
     * 
    **/
    where: EmployeeRolesWhereUniqueInput
  }


  /**
   * EmployeeRoles findFirst
   */
  export type EmployeeRolesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the EmployeeRoles
     * 
    **/
    select?: EmployeeRolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeRolesInclude | null
    /**
     * Throw an Error if a EmployeeRoles can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which EmployeeRoles to fetch.
     * 
    **/
    where?: EmployeeRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeRoles to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeRolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeRoles.
     * 
    **/
    cursor?: EmployeeRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeRoles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeRoles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeRoles.
     * 
    **/
    distinct?: Enumerable<EmployeeRolesScalarFieldEnum>
  }


  /**
   * EmployeeRoles findMany
   */
  export type EmployeeRolesFindManyArgs = {
    /**
     * Select specific fields to fetch from the EmployeeRoles
     * 
    **/
    select?: EmployeeRolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeRolesInclude | null
    /**
     * Filter, which EmployeeRoles to fetch.
     * 
    **/
    where?: EmployeeRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeRoles to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeRolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeRoles.
     * 
    **/
    cursor?: EmployeeRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeRoles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeRoles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EmployeeRolesScalarFieldEnum>
  }


  /**
   * EmployeeRoles create
   */
  export type EmployeeRolesCreateArgs = {
    /**
     * Select specific fields to fetch from the EmployeeRoles
     * 
    **/
    select?: EmployeeRolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeRolesInclude | null
    /**
     * The data needed to create a EmployeeRoles.
     * 
    **/
    data: XOR<EmployeeRolesCreateInput, EmployeeRolesUncheckedCreateInput>
  }


  /**
   * EmployeeRoles createMany
   */
  export type EmployeeRolesCreateManyArgs = {
    /**
     * The data used to create many EmployeeRoles.
     * 
    **/
    data: Enumerable<EmployeeRolesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * EmployeeRoles update
   */
  export type EmployeeRolesUpdateArgs = {
    /**
     * Select specific fields to fetch from the EmployeeRoles
     * 
    **/
    select?: EmployeeRolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeRolesInclude | null
    /**
     * The data needed to update a EmployeeRoles.
     * 
    **/
    data: XOR<EmployeeRolesUpdateInput, EmployeeRolesUncheckedUpdateInput>
    /**
     * Choose, which EmployeeRoles to update.
     * 
    **/
    where: EmployeeRolesWhereUniqueInput
  }


  /**
   * EmployeeRoles updateMany
   */
  export type EmployeeRolesUpdateManyArgs = {
    /**
     * The data used to update EmployeeRoles.
     * 
    **/
    data: XOR<EmployeeRolesUpdateManyMutationInput, EmployeeRolesUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeRoles to update
     * 
    **/
    where?: EmployeeRolesWhereInput
  }


  /**
   * EmployeeRoles upsert
   */
  export type EmployeeRolesUpsertArgs = {
    /**
     * Select specific fields to fetch from the EmployeeRoles
     * 
    **/
    select?: EmployeeRolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeRolesInclude | null
    /**
     * The filter to search for the EmployeeRoles to update in case it exists.
     * 
    **/
    where: EmployeeRolesWhereUniqueInput
    /**
     * In case the EmployeeRoles found by the `where` argument doesn't exist, create a new EmployeeRoles with this data.
     * 
    **/
    create: XOR<EmployeeRolesCreateInput, EmployeeRolesUncheckedCreateInput>
    /**
     * In case the EmployeeRoles was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EmployeeRolesUpdateInput, EmployeeRolesUncheckedUpdateInput>
  }


  /**
   * EmployeeRoles delete
   */
  export type EmployeeRolesDeleteArgs = {
    /**
     * Select specific fields to fetch from the EmployeeRoles
     * 
    **/
    select?: EmployeeRolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeRolesInclude | null
    /**
     * Filter which EmployeeRoles to delete.
     * 
    **/
    where: EmployeeRolesWhereUniqueInput
  }


  /**
   * EmployeeRoles deleteMany
   */
  export type EmployeeRolesDeleteManyArgs = {
    /**
     * Filter which EmployeeRoles to delete
     * 
    **/
    where?: EmployeeRolesWhereInput
  }


  /**
   * EmployeeRoles without action
   */
  export type EmployeeRolesArgs = {
    /**
     * Select specific fields to fetch from the EmployeeRoles
     * 
    **/
    select?: EmployeeRolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeRolesInclude | null
  }



  /**
   * Model Roles
   */


  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
    detail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    detail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    detail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RolesAggregateArgs = {
    /**
     * Filter which Roles to aggregate.
     * 
    **/
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs = {
    where?: RolesWhereInput
    orderBy?: Enumerable<RolesOrderByWithAggregationInput>
    by: Array<RolesScalarFieldEnum>
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }


  export type RolesGroupByOutputType = {
    id: number
    name: string
    detail: string
    createdAt: Date
    updatedAt: Date
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect = {
    id?: boolean
    name?: boolean
    detail?: boolean
    employees?: boolean | EmployeeRolesFindManyArgs
    team?: boolean | EmployeeTeamsFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | RolesCountOutputTypeArgs
  }

  export type RolesInclude = {
    employees?: boolean | EmployeeRolesFindManyArgs
    team?: boolean | EmployeeTeamsFindManyArgs
    _count?: boolean | RolesCountOutputTypeArgs
  }

  export type RolesGetPayload<
    S extends boolean | null | undefined | RolesArgs,
    U = keyof S
      > = S extends true
        ? Roles
    : S extends undefined
    ? never
    : S extends RolesArgs | RolesFindManyArgs
    ?'include' extends U
    ? Roles  & {
    [P in TrueKeys<S['include']>]:
        P extends 'employees' ? Array < EmployeeRolesGetPayload<S['include'][P]>>  :
        P extends 'team' ? Array < EmployeeTeamsGetPayload<S['include'][P]>>  :
        P extends '_count' ? RolesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'employees' ? Array < EmployeeRolesGetPayload<S['select'][P]>>  :
        P extends 'team' ? Array < EmployeeTeamsGetPayload<S['select'][P]>>  :
        P extends '_count' ? RolesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Roles ? Roles[P] : never
  } 
    : Roles
  : Roles


  type RolesCountArgs = Merge<
    Omit<RolesFindManyArgs, 'select' | 'include'> & {
      select?: RolesCountAggregateInputType | true
    }
  >

  export interface RolesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RolesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RolesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Roles'> extends True ? CheckSelect<T, Prisma__RolesClient<Roles>, Prisma__RolesClient<RolesGetPayload<T>>> : CheckSelect<T, Prisma__RolesClient<Roles | null >, Prisma__RolesClient<RolesGetPayload<T> | null >>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RolesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RolesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Roles'> extends True ? CheckSelect<T, Prisma__RolesClient<Roles>, Prisma__RolesClient<RolesGetPayload<T>>> : CheckSelect<T, Prisma__RolesClient<Roles | null >, Prisma__RolesClient<RolesGetPayload<T> | null >>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RolesFindManyArgs>(
      args?: SelectSubset<T, RolesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Roles>>, PrismaPromise<Array<RolesGetPayload<T>>>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
    **/
    create<T extends RolesCreateArgs>(
      args: SelectSubset<T, RolesCreateArgs>
    ): CheckSelect<T, Prisma__RolesClient<Roles>, Prisma__RolesClient<RolesGetPayload<T>>>

    /**
     * Create many Roles.
     *     @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const roles = await prisma.roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RolesCreateManyArgs>(
      args?: SelectSubset<T, RolesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
    **/
    delete<T extends RolesDeleteArgs>(
      args: SelectSubset<T, RolesDeleteArgs>
    ): CheckSelect<T, Prisma__RolesClient<Roles>, Prisma__RolesClient<RolesGetPayload<T>>>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RolesUpdateArgs>(
      args: SelectSubset<T, RolesUpdateArgs>
    ): CheckSelect<T, Prisma__RolesClient<Roles>, Prisma__RolesClient<RolesGetPayload<T>>>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RolesDeleteManyArgs>(
      args?: SelectSubset<T, RolesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RolesUpdateManyArgs>(
      args: SelectSubset<T, RolesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
    **/
    upsert<T extends RolesUpsertArgs>(
      args: SelectSubset<T, RolesUpsertArgs>
    ): CheckSelect<T, Prisma__RolesClient<Roles>, Prisma__RolesClient<RolesGetPayload<T>>>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
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
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RolesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    employees<T extends EmployeeRolesFindManyArgs = {}>(args?: Subset<T, EmployeeRolesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<EmployeeRoles>>, PrismaPromise<Array<EmployeeRolesGetPayload<T>>>>;

    team<T extends EmployeeTeamsFindManyArgs = {}>(args?: Subset<T, EmployeeTeamsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<EmployeeTeams>>, PrismaPromise<Array<EmployeeTeamsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Roles
     * 
    **/
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RolesInclude | null
    /**
     * Throw an Error if a Roles can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Roles to fetch.
     * 
    **/
    where: RolesWhereUniqueInput
  }


  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Roles
     * 
    **/
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RolesInclude | null
    /**
     * Throw an Error if a Roles can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Roles to fetch.
     * 
    **/
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     * 
    **/
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     * 
    **/
    distinct?: Enumerable<RolesScalarFieldEnum>
  }


  /**
   * Roles findMany
   */
  export type RolesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Roles
     * 
    **/
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RolesInclude | null
    /**
     * Filter, which Roles to fetch.
     * 
    **/
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RolesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     * 
    **/
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RolesScalarFieldEnum>
  }


  /**
   * Roles create
   */
  export type RolesCreateArgs = {
    /**
     * Select specific fields to fetch from the Roles
     * 
    **/
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RolesInclude | null
    /**
     * The data needed to create a Roles.
     * 
    **/
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }


  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs = {
    /**
     * The data used to create many Roles.
     * 
    **/
    data: Enumerable<RolesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Roles update
   */
  export type RolesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Roles
     * 
    **/
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RolesInclude | null
    /**
     * The data needed to update a Roles.
     * 
    **/
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     * 
    **/
    where: RolesWhereUniqueInput
  }


  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs = {
    /**
     * The data used to update Roles.
     * 
    **/
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     * 
    **/
    where?: RolesWhereInput
  }


  /**
   * Roles upsert
   */
  export type RolesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Roles
     * 
    **/
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RolesInclude | null
    /**
     * The filter to search for the Roles to update in case it exists.
     * 
    **/
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     * 
    **/
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }


  /**
   * Roles delete
   */
  export type RolesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Roles
     * 
    **/
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RolesInclude | null
    /**
     * Filter which Roles to delete.
     * 
    **/
    where: RolesWhereUniqueInput
  }


  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs = {
    /**
     * Filter which Roles to delete
     * 
    **/
    where?: RolesWhereInput
  }


  /**
   * Roles without action
   */
  export type RolesArgs = {
    /**
     * Select specific fields to fetch from the Roles
     * 
    **/
    select?: RolesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RolesInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UsersScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    username: 'username',
    email: 'email',
    password: 'password',
    picture: 'picture',
    centerSheetId: 'centerSheetId',
    googleCredential: 'googleCredential'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ActivitiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    venue: 'venue',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    detail: 'detail',
    photo: 'photo'
  };

  export type ActivitiesScalarFieldEnum = (typeof ActivitiesScalarFieldEnum)[keyof typeof ActivitiesScalarFieldEnum]


  export const EmployeeActivitiesScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    activityId: 'activityId'
  };

  export type EmployeeActivitiesScalarFieldEnum = (typeof EmployeeActivitiesScalarFieldEnum)[keyof typeof EmployeeActivitiesScalarFieldEnum]


  export const EmployeesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    gender: 'gender',
    placeOfBirth: 'placeOfBirth',
    dateOfBirth: 'dateOfBirth',
    marriageStatus: 'marriageStatus',
    photo: 'photo',
    address: 'address',
    officeEmail: 'officeEmail',
    officeEmailPassword: 'officeEmailPassword',
    status: 'status',
    handphone: 'handphone',
    startWork: 'startWork',
    endWork: 'endWork',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const EmployeeTeamsScalarFieldEnum: {
    employeeId: 'employeeId',
    teamId: 'teamId',
    code: 'code',
    roleId: 'roleId',
    id: 'id'
  };

  export type EmployeeTeamsScalarFieldEnum = (typeof EmployeeTeamsScalarFieldEnum)[keyof typeof EmployeeTeamsScalarFieldEnum]


  export const EmployeeSchoolsScalarFieldEnum: {
    id: 'id',
    graduateYear: 'graduateYear',
    employeeId: 'employeeId',
    schoolId: 'schoolId'
  };

  export type EmployeeSchoolsScalarFieldEnum = (typeof EmployeeSchoolsScalarFieldEnum)[keyof typeof EmployeeSchoolsScalarFieldEnum]


  export const SchoolsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchoolsScalarFieldEnum = (typeof SchoolsScalarFieldEnum)[keyof typeof SchoolsScalarFieldEnum]


  export const TeamsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    address: 'address',
    image: 'image'
  };

  export type TeamsScalarFieldEnum = (typeof TeamsScalarFieldEnum)[keyof typeof TeamsScalarFieldEnum]


  export const EmployeeRolesScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    roleId: 'roleId'
  };

  export type EmployeeRolesScalarFieldEnum = (typeof EmployeeRolesScalarFieldEnum)[keyof typeof EmployeeRolesScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    detail: 'detail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    username?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    picture?: StringFilter | string
    centerSheetId?: StringFilter | string
    googleCredential?: StringFilter | string
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    centerSheetId?: SortOrder
    googleCredential?: SortOrder
  }

  export type UsersWhereUniqueInput = {
    id?: number
    username?: string
    email?: string
  }

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    centerSheetId?: SortOrder
    googleCredential?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    username?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    picture?: StringWithAggregatesFilter | string
    centerSheetId?: StringWithAggregatesFilter | string
    googleCredential?: StringWithAggregatesFilter | string
  }

  export type ActivitiesWhereInput = {
    AND?: Enumerable<ActivitiesWhereInput>
    OR?: Enumerable<ActivitiesWhereInput>
    NOT?: Enumerable<ActivitiesWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    venue?: StringNullableFilter | string | null
    status?: StringNullableFilter | string | null
    startDate?: DateTimeNullableFilter | Date | string | null
    endDate?: DateTimeNullableFilter | Date | string | null
    detail?: StringNullableFilter | string | null
    photo?: StringNullableFilter | string | null
    employees?: EmployeeActivitiesListRelationFilter
  }

  export type ActivitiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    detail?: SortOrder
    photo?: SortOrder
    employees?: EmployeeActivitiesOrderByRelationAggregateInput
  }

  export type ActivitiesWhereUniqueInput = {
    id?: number
  }

  export type ActivitiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    detail?: SortOrder
    photo?: SortOrder
    _count?: ActivitiesCountOrderByAggregateInput
    _avg?: ActivitiesAvgOrderByAggregateInput
    _max?: ActivitiesMaxOrderByAggregateInput
    _min?: ActivitiesMinOrderByAggregateInput
    _sum?: ActivitiesSumOrderByAggregateInput
  }

  export type ActivitiesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ActivitiesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ActivitiesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ActivitiesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    venue?: StringNullableWithAggregatesFilter | string | null
    status?: StringNullableWithAggregatesFilter | string | null
    startDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    detail?: StringNullableWithAggregatesFilter | string | null
    photo?: StringNullableWithAggregatesFilter | string | null
  }

  export type EmployeeActivitiesWhereInput = {
    AND?: Enumerable<EmployeeActivitiesWhereInput>
    OR?: Enumerable<EmployeeActivitiesWhereInput>
    NOT?: Enumerable<EmployeeActivitiesWhereInput>
    id?: IntFilter | number
    employeeId?: IntFilter | number
    activityId?: IntFilter | number
    employee?: XOR<EmployeesRelationFilter, EmployeesWhereInput>
    activity?: XOR<ActivitiesRelationFilter, ActivitiesWhereInput>
  }

  export type EmployeeActivitiesOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    activityId?: SortOrder
    employee?: EmployeesOrderByWithRelationInput
    activity?: ActivitiesOrderByWithRelationInput
  }

  export type EmployeeActivitiesWhereUniqueInput = {
    id?: number
  }

  export type EmployeeActivitiesOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    activityId?: SortOrder
    _count?: EmployeeActivitiesCountOrderByAggregateInput
    _avg?: EmployeeActivitiesAvgOrderByAggregateInput
    _max?: EmployeeActivitiesMaxOrderByAggregateInput
    _min?: EmployeeActivitiesMinOrderByAggregateInput
    _sum?: EmployeeActivitiesSumOrderByAggregateInput
  }

  export type EmployeeActivitiesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EmployeeActivitiesScalarWhereWithAggregatesInput>
    OR?: Enumerable<EmployeeActivitiesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EmployeeActivitiesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    employeeId?: IntWithAggregatesFilter | number
    activityId?: IntWithAggregatesFilter | number
  }

  export type EmployeesWhereInput = {
    AND?: Enumerable<EmployeesWhereInput>
    OR?: Enumerable<EmployeesWhereInput>
    NOT?: Enumerable<EmployeesWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    gender?: EnumGenderFilter | Gender
    placeOfBirth?: StringFilter | string
    dateOfBirth?: DateTimeFilter | Date | string
    marriageStatus?: BoolFilter | boolean
    photo?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    officeEmail?: StringNullableFilter | string | null
    officeEmailPassword?: StringNullableFilter | string | null
    status?: StringNullableFilter | string | null
    handphone?: StringNullableFilter | string | null
    startWork?: DateTimeFilter | Date | string
    endWork?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    schools?: EmployeeSchoolsListRelationFilter
    roles?: EmployeeRolesListRelationFilter
    teams?: EmployeeTeamsListRelationFilter
    activities?: EmployeeActivitiesListRelationFilter
  }

  export type EmployeesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    placeOfBirth?: SortOrder
    dateOfBirth?: SortOrder
    marriageStatus?: SortOrder
    photo?: SortOrder
    address?: SortOrder
    officeEmail?: SortOrder
    officeEmailPassword?: SortOrder
    status?: SortOrder
    handphone?: SortOrder
    startWork?: SortOrder
    endWork?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schools?: EmployeeSchoolsOrderByRelationAggregateInput
    roles?: EmployeeRolesOrderByRelationAggregateInput
    teams?: EmployeeTeamsOrderByRelationAggregateInput
    activities?: EmployeeActivitiesOrderByRelationAggregateInput
  }

  export type EmployeesWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type EmployeesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    placeOfBirth?: SortOrder
    dateOfBirth?: SortOrder
    marriageStatus?: SortOrder
    photo?: SortOrder
    address?: SortOrder
    officeEmail?: SortOrder
    officeEmailPassword?: SortOrder
    status?: SortOrder
    handphone?: SortOrder
    startWork?: SortOrder
    endWork?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeesCountOrderByAggregateInput
    _avg?: EmployeesAvgOrderByAggregateInput
    _max?: EmployeesMaxOrderByAggregateInput
    _min?: EmployeesMinOrderByAggregateInput
    _sum?: EmployeesSumOrderByAggregateInput
  }

  export type EmployeesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EmployeesScalarWhereWithAggregatesInput>
    OR?: Enumerable<EmployeesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EmployeesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    gender?: EnumGenderWithAggregatesFilter | Gender
    placeOfBirth?: StringWithAggregatesFilter | string
    dateOfBirth?: DateTimeWithAggregatesFilter | Date | string
    marriageStatus?: BoolWithAggregatesFilter | boolean
    photo?: StringNullableWithAggregatesFilter | string | null
    address?: StringNullableWithAggregatesFilter | string | null
    officeEmail?: StringNullableWithAggregatesFilter | string | null
    officeEmailPassword?: StringNullableWithAggregatesFilter | string | null
    status?: StringNullableWithAggregatesFilter | string | null
    handphone?: StringNullableWithAggregatesFilter | string | null
    startWork?: DateTimeWithAggregatesFilter | Date | string
    endWork?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EmployeeTeamsWhereInput = {
    AND?: Enumerable<EmployeeTeamsWhereInput>
    OR?: Enumerable<EmployeeTeamsWhereInput>
    NOT?: Enumerable<EmployeeTeamsWhereInput>
    employeeId?: IntFilter | number
    teamId?: IntFilter | number
    code?: StringFilter | string
    roleId?: IntFilter | number
    role?: XOR<RolesRelationFilter, RolesWhereInput>
    employees?: XOR<EmployeesRelationFilter, EmployeesWhereInput>
    teams?: XOR<TeamsRelationFilter, TeamsWhereInput>
    id?: IntFilter | number
  }

  export type EmployeeTeamsOrderByWithRelationInput = {
    employeeId?: SortOrder
    teamId?: SortOrder
    code?: SortOrder
    roleId?: SortOrder
    role?: RolesOrderByWithRelationInput
    employees?: EmployeesOrderByWithRelationInput
    teams?: TeamsOrderByWithRelationInput
    id?: SortOrder
  }

  export type EmployeeTeamsWhereUniqueInput = {
    id?: number
  }

  export type EmployeeTeamsOrderByWithAggregationInput = {
    employeeId?: SortOrder
    teamId?: SortOrder
    code?: SortOrder
    roleId?: SortOrder
    id?: SortOrder
    _count?: EmployeeTeamsCountOrderByAggregateInput
    _avg?: EmployeeTeamsAvgOrderByAggregateInput
    _max?: EmployeeTeamsMaxOrderByAggregateInput
    _min?: EmployeeTeamsMinOrderByAggregateInput
    _sum?: EmployeeTeamsSumOrderByAggregateInput
  }

  export type EmployeeTeamsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EmployeeTeamsScalarWhereWithAggregatesInput>
    OR?: Enumerable<EmployeeTeamsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EmployeeTeamsScalarWhereWithAggregatesInput>
    employeeId?: IntWithAggregatesFilter | number
    teamId?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    roleId?: IntWithAggregatesFilter | number
    id?: IntWithAggregatesFilter | number
  }

  export type EmployeeSchoolsWhereInput = {
    AND?: Enumerable<EmployeeSchoolsWhereInput>
    OR?: Enumerable<EmployeeSchoolsWhereInput>
    NOT?: Enumerable<EmployeeSchoolsWhereInput>
    id?: IntFilter | number
    graduateYear?: IntFilter | number
    employeeId?: IntFilter | number
    schoolId?: IntFilter | number
    employeess?: XOR<EmployeesRelationFilter, EmployeesWhereInput>
    schools?: XOR<SchoolsRelationFilter, SchoolsWhereInput>
  }

  export type EmployeeSchoolsOrderByWithRelationInput = {
    id?: SortOrder
    graduateYear?: SortOrder
    employeeId?: SortOrder
    schoolId?: SortOrder
    employeess?: EmployeesOrderByWithRelationInput
    schools?: SchoolsOrderByWithRelationInput
  }

  export type EmployeeSchoolsWhereUniqueInput = {
    id?: number
  }

  export type EmployeeSchoolsOrderByWithAggregationInput = {
    id?: SortOrder
    graduateYear?: SortOrder
    employeeId?: SortOrder
    schoolId?: SortOrder
    _count?: EmployeeSchoolsCountOrderByAggregateInput
    _avg?: EmployeeSchoolsAvgOrderByAggregateInput
    _max?: EmployeeSchoolsMaxOrderByAggregateInput
    _min?: EmployeeSchoolsMinOrderByAggregateInput
    _sum?: EmployeeSchoolsSumOrderByAggregateInput
  }

  export type EmployeeSchoolsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EmployeeSchoolsScalarWhereWithAggregatesInput>
    OR?: Enumerable<EmployeeSchoolsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EmployeeSchoolsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    graduateYear?: IntWithAggregatesFilter | number
    employeeId?: IntWithAggregatesFilter | number
    schoolId?: IntWithAggregatesFilter | number
  }

  export type SchoolsWhereInput = {
    AND?: Enumerable<SchoolsWhereInput>
    OR?: Enumerable<SchoolsWhereInput>
    NOT?: Enumerable<SchoolsWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    level?: EnumSchoolLevelFilter | SchoolLevel
    address?: StringFilter | string
    employees?: EmployeeSchoolsListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SchoolsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    address?: SortOrder
    employees?: EmployeeSchoolsOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolsWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type SchoolsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolsCountOrderByAggregateInput
    _avg?: SchoolsAvgOrderByAggregateInput
    _max?: SchoolsMaxOrderByAggregateInput
    _min?: SchoolsMinOrderByAggregateInput
    _sum?: SchoolsSumOrderByAggregateInput
  }

  export type SchoolsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SchoolsScalarWhereWithAggregatesInput>
    OR?: Enumerable<SchoolsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SchoolsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    level?: EnumSchoolLevelWithAggregatesFilter | SchoolLevel
    address?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TeamsWhereInput = {
    AND?: Enumerable<TeamsWhereInput>
    OR?: Enumerable<TeamsWhereInput>
    NOT?: Enumerable<TeamsWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    code?: StringFilter | string
    employees?: EmployeeTeamsListRelationFilter
    address?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
  }

  export type TeamsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    employees?: EmployeeTeamsOrderByRelationAggregateInput
    address?: SortOrder
    image?: SortOrder
  }

  export type TeamsWhereUniqueInput = {
    id?: number
    code?: string
  }

  export type TeamsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    image?: SortOrder
    _count?: TeamsCountOrderByAggregateInput
    _avg?: TeamsAvgOrderByAggregateInput
    _max?: TeamsMaxOrderByAggregateInput
    _min?: TeamsMinOrderByAggregateInput
    _sum?: TeamsSumOrderByAggregateInput
  }

  export type TeamsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TeamsScalarWhereWithAggregatesInput>
    OR?: Enumerable<TeamsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TeamsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    code?: StringWithAggregatesFilter | string
    address?: StringNullableWithAggregatesFilter | string | null
    image?: StringNullableWithAggregatesFilter | string | null
  }

  export type EmployeeRolesWhereInput = {
    AND?: Enumerable<EmployeeRolesWhereInput>
    OR?: Enumerable<EmployeeRolesWhereInput>
    NOT?: Enumerable<EmployeeRolesWhereInput>
    id?: IntFilter | number
    employeeId?: IntFilter | number
    roleId?: IntFilter | number
    employees?: XOR<EmployeesRelationFilter, EmployeesWhereInput>
    roles?: XOR<RolesRelationFilter, RolesWhereInput>
  }

  export type EmployeeRolesOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    roleId?: SortOrder
    employees?: EmployeesOrderByWithRelationInput
    roles?: RolesOrderByWithRelationInput
  }

  export type EmployeeRolesWhereUniqueInput = {
    id?: number
  }

  export type EmployeeRolesOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    roleId?: SortOrder
    _count?: EmployeeRolesCountOrderByAggregateInput
    _avg?: EmployeeRolesAvgOrderByAggregateInput
    _max?: EmployeeRolesMaxOrderByAggregateInput
    _min?: EmployeeRolesMinOrderByAggregateInput
    _sum?: EmployeeRolesSumOrderByAggregateInput
  }

  export type EmployeeRolesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EmployeeRolesScalarWhereWithAggregatesInput>
    OR?: Enumerable<EmployeeRolesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EmployeeRolesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    employeeId?: IntWithAggregatesFilter | number
    roleId?: IntWithAggregatesFilter | number
  }

  export type RolesWhereInput = {
    AND?: Enumerable<RolesWhereInput>
    OR?: Enumerable<RolesWhereInput>
    NOT?: Enumerable<RolesWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    detail?: StringFilter | string
    employees?: EmployeeRolesListRelationFilter
    team?: EmployeeTeamsListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    employees?: EmployeeRolesOrderByRelationAggregateInput
    team?: EmployeeTeamsOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolesWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RolesCountOrderByAggregateInput
    _avg?: RolesAvgOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
    _sum?: RolesSumOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RolesScalarWhereWithAggregatesInput>
    OR?: Enumerable<RolesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RolesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    detail?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UsersCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    email: string
    password: string
    picture?: string
    centerSheetId?: string
    googleCredential?: string
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    email: string
    password: string
    picture?: string
    centerSheetId?: string
    googleCredential?: string
  }

  export type UsersUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    centerSheetId?: StringFieldUpdateOperationsInput | string
    googleCredential?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    centerSheetId?: StringFieldUpdateOperationsInput | string
    googleCredential?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    email: string
    password: string
    picture?: string
    centerSheetId?: string
    googleCredential?: string
  }

  export type UsersUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    centerSheetId?: StringFieldUpdateOperationsInput | string
    googleCredential?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    centerSheetId?: StringFieldUpdateOperationsInput | string
    googleCredential?: StringFieldUpdateOperationsInput | string
  }

  export type ActivitiesCreateInput = {
    name: string
    venue?: string | null
    status?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    detail?: string | null
    photo?: string | null
    employees?: EmployeeActivitiesCreateNestedManyWithoutActivityInput
  }

  export type ActivitiesUncheckedCreateInput = {
    id?: number
    name: string
    venue?: string | null
    status?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    detail?: string | null
    photo?: string | null
    employees?: EmployeeActivitiesUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivitiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: EmployeeActivitiesUpdateManyWithoutActivityInput
  }

  export type ActivitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: EmployeeActivitiesUncheckedUpdateManyWithoutActivityInput
  }

  export type ActivitiesCreateManyInput = {
    id?: number
    name: string
    venue?: string | null
    status?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    detail?: string | null
    photo?: string | null
  }

  export type ActivitiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeActivitiesCreateInput = {
    employee: EmployeesCreateNestedOneWithoutActivitiesInput
    activity: ActivitiesCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeActivitiesUncheckedCreateInput = {
    id?: number
    employeeId: number
    activityId: number
  }

  export type EmployeeActivitiesUpdateInput = {
    employee?: EmployeesUpdateOneRequiredWithoutActivitiesInput
    activity?: ActivitiesUpdateOneRequiredWithoutEmployeesInput
  }

  export type EmployeeActivitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeActivitiesCreateManyInput = {
    id?: number
    employeeId: number
    activityId: number
  }

  export type EmployeeActivitiesUpdateManyMutationInput = {

  }

  export type EmployeeActivitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeesCreateInput = {
    name: string
    email: string
    gender?: Gender
    placeOfBirth: string
    dateOfBirth: Date | string
    marriageStatus?: boolean
    photo?: string | null
    address?: string | null
    officeEmail?: string | null
    officeEmailPassword?: string | null
    status?: string | null
    handphone?: string | null
    startWork?: Date | string
    endWork?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: EmployeeSchoolsCreateNestedManyWithoutEmployeessInput
    roles?: EmployeeRolesCreateNestedManyWithoutEmployeesInput
    teams?: EmployeeTeamsCreateNestedManyWithoutEmployeesInput
    activities?: EmployeeActivitiesCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    gender?: Gender
    placeOfBirth: string
    dateOfBirth: Date | string
    marriageStatus?: boolean
    photo?: string | null
    address?: string | null
    officeEmail?: string | null
    officeEmailPassword?: string | null
    status?: string | null
    handphone?: string | null
    startWork?: Date | string
    endWork?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: EmployeeSchoolsUncheckedCreateNestedManyWithoutEmployeessInput
    roles?: EmployeeRolesUncheckedCreateNestedManyWithoutEmployeesInput
    teams?: EmployeeTeamsUncheckedCreateNestedManyWithoutEmployeesInput
    activities?: EmployeeActivitiesUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    marriageStatus?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmailPassword?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    handphone?: NullableStringFieldUpdateOperationsInput | string | null
    startWork?: DateTimeFieldUpdateOperationsInput | Date | string
    endWork?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: EmployeeSchoolsUpdateManyWithoutEmployeessInput
    roles?: EmployeeRolesUpdateManyWithoutEmployeesInput
    teams?: EmployeeTeamsUpdateManyWithoutEmployeesInput
    activities?: EmployeeActivitiesUpdateManyWithoutEmployeeInput
  }

  export type EmployeesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    marriageStatus?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmailPassword?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    handphone?: NullableStringFieldUpdateOperationsInput | string | null
    startWork?: DateTimeFieldUpdateOperationsInput | Date | string
    endWork?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: EmployeeSchoolsUncheckedUpdateManyWithoutEmployeessInput
    roles?: EmployeeRolesUncheckedUpdateManyWithoutEmployeesInput
    teams?: EmployeeTeamsUncheckedUpdateManyWithoutEmployeesInput
    activities?: EmployeeActivitiesUncheckedUpdateManyWithoutEmployeeInput
  }

  export type EmployeesCreateManyInput = {
    id?: number
    name: string
    email: string
    gender?: Gender
    placeOfBirth: string
    dateOfBirth: Date | string
    marriageStatus?: boolean
    photo?: string | null
    address?: string | null
    officeEmail?: string | null
    officeEmailPassword?: string | null
    status?: string | null
    handphone?: string | null
    startWork?: Date | string
    endWork?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    marriageStatus?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmailPassword?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    handphone?: NullableStringFieldUpdateOperationsInput | string | null
    startWork?: DateTimeFieldUpdateOperationsInput | Date | string
    endWork?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    marriageStatus?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmailPassword?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    handphone?: NullableStringFieldUpdateOperationsInput | string | null
    startWork?: DateTimeFieldUpdateOperationsInput | Date | string
    endWork?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeTeamsCreateInput = {
    code: string
    role?: RolesCreateNestedOneWithoutTeamInput
    employees: EmployeesCreateNestedOneWithoutTeamsInput
    teams: TeamsCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeTeamsUncheckedCreateInput = {
    employeeId: number
    teamId: number
    code: string
    roleId?: number
    id?: number
  }

  export type EmployeeTeamsUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    role?: RolesUpdateOneRequiredWithoutTeamInput
    employees?: EmployeesUpdateOneRequiredWithoutTeamsInput
    teams?: TeamsUpdateOneRequiredWithoutEmployeesInput
  }

  export type EmployeeTeamsUncheckedUpdateInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeTeamsCreateManyInput = {
    employeeId: number
    teamId: number
    code: string
    roleId?: number
    id?: number
  }

  export type EmployeeTeamsUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeTeamsUncheckedUpdateManyInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeSchoolsCreateInput = {
    graduateYear?: number
    employeess: EmployeesCreateNestedOneWithoutSchoolsInput
    schools: SchoolsCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeSchoolsUncheckedCreateInput = {
    id?: number
    graduateYear?: number
    employeeId: number
    schoolId: number
  }

  export type EmployeeSchoolsUpdateInput = {
    graduateYear?: IntFieldUpdateOperationsInput | number
    employeess?: EmployeesUpdateOneRequiredWithoutSchoolsInput
    schools?: SchoolsUpdateOneRequiredWithoutEmployeesInput
  }

  export type EmployeeSchoolsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    graduateYear?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeSchoolsCreateManyInput = {
    id?: number
    graduateYear?: number
    employeeId: number
    schoolId: number
  }

  export type EmployeeSchoolsUpdateManyMutationInput = {
    graduateYear?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeSchoolsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    graduateYear?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type SchoolsCreateInput = {
    name: string
    level?: SchoolLevel
    address?: string
    employees?: EmployeeSchoolsCreateNestedManyWithoutSchoolsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolsUncheckedCreateInput = {
    id?: number
    name: string
    level?: SchoolLevel
    address?: string
    employees?: EmployeeSchoolsUncheckedCreateNestedManyWithoutSchoolsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSchoolLevelFieldUpdateOperationsInput | SchoolLevel
    address?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeSchoolsUpdateManyWithoutSchoolsInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSchoolLevelFieldUpdateOperationsInput | SchoolLevel
    address?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeSchoolsUncheckedUpdateManyWithoutSchoolsInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolsCreateManyInput = {
    id?: number
    name: string
    level?: SchoolLevel
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSchoolLevelFieldUpdateOperationsInput | SchoolLevel
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSchoolLevelFieldUpdateOperationsInput | SchoolLevel
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsCreateInput = {
    name: string
    code: string
    employees?: EmployeeTeamsCreateNestedManyWithoutTeamsInput
    address?: string | null
    image?: string | null
  }

  export type TeamsUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    employees?: EmployeeTeamsUncheckedCreateNestedManyWithoutTeamsInput
    address?: string | null
    image?: string | null
  }

  export type TeamsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeTeamsUpdateManyWithoutTeamsInput
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeTeamsUncheckedUpdateManyWithoutTeamsInput
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamsCreateManyInput = {
    id?: number
    name: string
    code: string
    address?: string | null
    image?: string | null
  }

  export type TeamsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeRolesCreateInput = {
    employees: EmployeesCreateNestedOneWithoutRolesInput
    roles: RolesCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeRolesUncheckedCreateInput = {
    id?: number
    employeeId: number
    roleId: number
  }

  export type EmployeeRolesUpdateInput = {
    employees?: EmployeesUpdateOneRequiredWithoutRolesInput
    roles?: RolesUpdateOneRequiredWithoutEmployeesInput
  }

  export type EmployeeRolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeRolesCreateManyInput = {
    id?: number
    employeeId: number
    roleId: number
  }

  export type EmployeeRolesUpdateManyMutationInput = {

  }

  export type EmployeeRolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RolesCreateInput = {
    name: string
    detail?: string
    employees?: EmployeeRolesCreateNestedManyWithoutRolesInput
    team?: EmployeeTeamsCreateNestedManyWithoutRoleInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolesUncheckedCreateInput = {
    id?: number
    name: string
    detail?: string
    employees?: EmployeeRolesUncheckedCreateNestedManyWithoutRolesInput
    team?: EmployeeTeamsUncheckedCreateNestedManyWithoutRoleInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeRolesUpdateManyWithoutRolesInput
    team?: EmployeeTeamsUpdateManyWithoutRoleInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeRolesUncheckedUpdateManyWithoutRolesInput
    team?: EmployeeTeamsUncheckedUpdateManyWithoutRoleInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesCreateManyInput = {
    id?: number
    name: string
    detail?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    centerSheetId?: SortOrder
    googleCredential?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    centerSheetId?: SortOrder
    googleCredential?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    centerSheetId?: SortOrder
    googleCredential?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type EmployeeActivitiesListRelationFilter = {
    every?: EmployeeActivitiesWhereInput
    some?: EmployeeActivitiesWhereInput
    none?: EmployeeActivitiesWhereInput
  }

  export type EmployeeActivitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivitiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    detail?: SortOrder
    photo?: SortOrder
  }

  export type ActivitiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    detail?: SortOrder
    photo?: SortOrder
  }

  export type ActivitiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    detail?: SortOrder
    photo?: SortOrder
  }

  export type ActivitiesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type EmployeesRelationFilter = {
    is?: EmployeesWhereInput
    isNot?: EmployeesWhereInput
  }

  export type ActivitiesRelationFilter = {
    is?: ActivitiesWhereInput
    isNot?: ActivitiesWhereInput
  }

  export type EmployeeActivitiesCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    activityId?: SortOrder
  }

  export type EmployeeActivitiesAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    activityId?: SortOrder
  }

  export type EmployeeActivitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    activityId?: SortOrder
  }

  export type EmployeeActivitiesMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    activityId?: SortOrder
  }

  export type EmployeeActivitiesSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    activityId?: SortOrder
  }

  export type EnumGenderFilter = {
    equals?: Gender
    in?: Enumerable<Gender>
    notIn?: Enumerable<Gender>
    not?: NestedEnumGenderFilter | Gender
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type EmployeeSchoolsListRelationFilter = {
    every?: EmployeeSchoolsWhereInput
    some?: EmployeeSchoolsWhereInput
    none?: EmployeeSchoolsWhereInput
  }

  export type EmployeeRolesListRelationFilter = {
    every?: EmployeeRolesWhereInput
    some?: EmployeeRolesWhereInput
    none?: EmployeeRolesWhereInput
  }

  export type EmployeeTeamsListRelationFilter = {
    every?: EmployeeTeamsWhereInput
    some?: EmployeeTeamsWhereInput
    none?: EmployeeTeamsWhereInput
  }

  export type EmployeeSchoolsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeRolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeTeamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    placeOfBirth?: SortOrder
    dateOfBirth?: SortOrder
    marriageStatus?: SortOrder
    photo?: SortOrder
    address?: SortOrder
    officeEmail?: SortOrder
    officeEmailPassword?: SortOrder
    status?: SortOrder
    handphone?: SortOrder
    startWork?: SortOrder
    endWork?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployeesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    placeOfBirth?: SortOrder
    dateOfBirth?: SortOrder
    marriageStatus?: SortOrder
    photo?: SortOrder
    address?: SortOrder
    officeEmail?: SortOrder
    officeEmailPassword?: SortOrder
    status?: SortOrder
    handphone?: SortOrder
    startWork?: SortOrder
    endWork?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    placeOfBirth?: SortOrder
    dateOfBirth?: SortOrder
    marriageStatus?: SortOrder
    photo?: SortOrder
    address?: SortOrder
    officeEmail?: SortOrder
    officeEmailPassword?: SortOrder
    status?: SortOrder
    handphone?: SortOrder
    startWork?: SortOrder
    endWork?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter = {
    equals?: Gender
    in?: Enumerable<Gender>
    notIn?: Enumerable<Gender>
    not?: NestedEnumGenderWithAggregatesFilter | Gender
    _count?: NestedIntFilter
    _min?: NestedEnumGenderFilter
    _max?: NestedEnumGenderFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type RolesRelationFilter = {
    is?: RolesWhereInput
    isNot?: RolesWhereInput
  }

  export type TeamsRelationFilter = {
    is?: TeamsWhereInput
    isNot?: TeamsWhereInput
  }

  export type EmployeeTeamsCountOrderByAggregateInput = {
    employeeId?: SortOrder
    teamId?: SortOrder
    code?: SortOrder
    roleId?: SortOrder
    id?: SortOrder
  }

  export type EmployeeTeamsAvgOrderByAggregateInput = {
    employeeId?: SortOrder
    teamId?: SortOrder
    roleId?: SortOrder
    id?: SortOrder
  }

  export type EmployeeTeamsMaxOrderByAggregateInput = {
    employeeId?: SortOrder
    teamId?: SortOrder
    code?: SortOrder
    roleId?: SortOrder
    id?: SortOrder
  }

  export type EmployeeTeamsMinOrderByAggregateInput = {
    employeeId?: SortOrder
    teamId?: SortOrder
    code?: SortOrder
    roleId?: SortOrder
    id?: SortOrder
  }

  export type EmployeeTeamsSumOrderByAggregateInput = {
    employeeId?: SortOrder
    teamId?: SortOrder
    roleId?: SortOrder
    id?: SortOrder
  }

  export type SchoolsRelationFilter = {
    is?: SchoolsWhereInput
    isNot?: SchoolsWhereInput
  }

  export type EmployeeSchoolsCountOrderByAggregateInput = {
    id?: SortOrder
    graduateYear?: SortOrder
    employeeId?: SortOrder
    schoolId?: SortOrder
  }

  export type EmployeeSchoolsAvgOrderByAggregateInput = {
    id?: SortOrder
    graduateYear?: SortOrder
    employeeId?: SortOrder
    schoolId?: SortOrder
  }

  export type EmployeeSchoolsMaxOrderByAggregateInput = {
    id?: SortOrder
    graduateYear?: SortOrder
    employeeId?: SortOrder
    schoolId?: SortOrder
  }

  export type EmployeeSchoolsMinOrderByAggregateInput = {
    id?: SortOrder
    graduateYear?: SortOrder
    employeeId?: SortOrder
    schoolId?: SortOrder
  }

  export type EmployeeSchoolsSumOrderByAggregateInput = {
    id?: SortOrder
    graduateYear?: SortOrder
    employeeId?: SortOrder
    schoolId?: SortOrder
  }

  export type EnumSchoolLevelFilter = {
    equals?: SchoolLevel
    in?: Enumerable<SchoolLevel>
    notIn?: Enumerable<SchoolLevel>
    not?: NestedEnumSchoolLevelFilter | SchoolLevel
  }

  export type SchoolsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SchoolsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSchoolLevelWithAggregatesFilter = {
    equals?: SchoolLevel
    in?: Enumerable<SchoolLevel>
    notIn?: Enumerable<SchoolLevel>
    not?: NestedEnumSchoolLevelWithAggregatesFilter | SchoolLevel
    _count?: NestedIntFilter
    _min?: NestedEnumSchoolLevelFilter
    _max?: NestedEnumSchoolLevelFilter
  }

  export type TeamsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    image?: SortOrder
  }

  export type TeamsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    image?: SortOrder
  }

  export type TeamsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    image?: SortOrder
  }

  export type TeamsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployeeRolesCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    roleId?: SortOrder
  }

  export type EmployeeRolesAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    roleId?: SortOrder
  }

  export type EmployeeRolesMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    roleId?: SortOrder
  }

  export type EmployeeRolesMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    roleId?: SortOrder
  }

  export type EmployeeRolesSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    roleId?: SortOrder
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeActivitiesCreateNestedManyWithoutActivityInput = {
    create?: XOR<Enumerable<EmployeeActivitiesCreateWithoutActivityInput>, Enumerable<EmployeeActivitiesUncheckedCreateWithoutActivityInput>>
    connectOrCreate?: Enumerable<EmployeeActivitiesCreateOrConnectWithoutActivityInput>
    createMany?: EmployeeActivitiesCreateManyActivityInputEnvelope
    connect?: Enumerable<EmployeeActivitiesWhereUniqueInput>
  }

  export type EmployeeActivitiesUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<Enumerable<EmployeeActivitiesCreateWithoutActivityInput>, Enumerable<EmployeeActivitiesUncheckedCreateWithoutActivityInput>>
    connectOrCreate?: Enumerable<EmployeeActivitiesCreateOrConnectWithoutActivityInput>
    createMany?: EmployeeActivitiesCreateManyActivityInputEnvelope
    connect?: Enumerable<EmployeeActivitiesWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EmployeeActivitiesUpdateManyWithoutActivityInput = {
    create?: XOR<Enumerable<EmployeeActivitiesCreateWithoutActivityInput>, Enumerable<EmployeeActivitiesUncheckedCreateWithoutActivityInput>>
    connectOrCreate?: Enumerable<EmployeeActivitiesCreateOrConnectWithoutActivityInput>
    upsert?: Enumerable<EmployeeActivitiesUpsertWithWhereUniqueWithoutActivityInput>
    createMany?: EmployeeActivitiesCreateManyActivityInputEnvelope
    set?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    disconnect?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    delete?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    connect?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    update?: Enumerable<EmployeeActivitiesUpdateWithWhereUniqueWithoutActivityInput>
    updateMany?: Enumerable<EmployeeActivitiesUpdateManyWithWhereWithoutActivityInput>
    deleteMany?: Enumerable<EmployeeActivitiesScalarWhereInput>
  }

  export type EmployeeActivitiesUncheckedUpdateManyWithoutActivityInput = {
    create?: XOR<Enumerable<EmployeeActivitiesCreateWithoutActivityInput>, Enumerable<EmployeeActivitiesUncheckedCreateWithoutActivityInput>>
    connectOrCreate?: Enumerable<EmployeeActivitiesCreateOrConnectWithoutActivityInput>
    upsert?: Enumerable<EmployeeActivitiesUpsertWithWhereUniqueWithoutActivityInput>
    createMany?: EmployeeActivitiesCreateManyActivityInputEnvelope
    set?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    disconnect?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    delete?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    connect?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    update?: Enumerable<EmployeeActivitiesUpdateWithWhereUniqueWithoutActivityInput>
    updateMany?: Enumerable<EmployeeActivitiesUpdateManyWithWhereWithoutActivityInput>
    deleteMany?: Enumerable<EmployeeActivitiesScalarWhereInput>
  }

  export type EmployeesCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<EmployeesCreateWithoutActivitiesInput, EmployeesUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutActivitiesInput
    connect?: EmployeesWhereUniqueInput
  }

  export type ActivitiesCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<ActivitiesCreateWithoutEmployeesInput, ActivitiesUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: ActivitiesCreateOrConnectWithoutEmployeesInput
    connect?: ActivitiesWhereUniqueInput
  }

  export type EmployeesUpdateOneRequiredWithoutActivitiesInput = {
    create?: XOR<EmployeesCreateWithoutActivitiesInput, EmployeesUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutActivitiesInput
    upsert?: EmployeesUpsertWithoutActivitiesInput
    connect?: EmployeesWhereUniqueInput
    update?: XOR<EmployeesUpdateWithoutActivitiesInput, EmployeesUncheckedUpdateWithoutActivitiesInput>
  }

  export type ActivitiesUpdateOneRequiredWithoutEmployeesInput = {
    create?: XOR<ActivitiesCreateWithoutEmployeesInput, ActivitiesUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: ActivitiesCreateOrConnectWithoutEmployeesInput
    upsert?: ActivitiesUpsertWithoutEmployeesInput
    connect?: ActivitiesWhereUniqueInput
    update?: XOR<ActivitiesUpdateWithoutEmployeesInput, ActivitiesUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeSchoolsCreateNestedManyWithoutEmployeessInput = {
    create?: XOR<Enumerable<EmployeeSchoolsCreateWithoutEmployeessInput>, Enumerable<EmployeeSchoolsUncheckedCreateWithoutEmployeessInput>>
    connectOrCreate?: Enumerable<EmployeeSchoolsCreateOrConnectWithoutEmployeessInput>
    createMany?: EmployeeSchoolsCreateManyEmployeessInputEnvelope
    connect?: Enumerable<EmployeeSchoolsWhereUniqueInput>
  }

  export type EmployeeRolesCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<Enumerable<EmployeeRolesCreateWithoutEmployeesInput>, Enumerable<EmployeeRolesUncheckedCreateWithoutEmployeesInput>>
    connectOrCreate?: Enumerable<EmployeeRolesCreateOrConnectWithoutEmployeesInput>
    createMany?: EmployeeRolesCreateManyEmployeesInputEnvelope
    connect?: Enumerable<EmployeeRolesWhereUniqueInput>
  }

  export type EmployeeTeamsCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<Enumerable<EmployeeTeamsCreateWithoutEmployeesInput>, Enumerable<EmployeeTeamsUncheckedCreateWithoutEmployeesInput>>
    connectOrCreate?: Enumerable<EmployeeTeamsCreateOrConnectWithoutEmployeesInput>
    createMany?: EmployeeTeamsCreateManyEmployeesInputEnvelope
    connect?: Enumerable<EmployeeTeamsWhereUniqueInput>
  }

  export type EmployeeActivitiesCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<Enumerable<EmployeeActivitiesCreateWithoutEmployeeInput>, Enumerable<EmployeeActivitiesUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<EmployeeActivitiesCreateOrConnectWithoutEmployeeInput>
    createMany?: EmployeeActivitiesCreateManyEmployeeInputEnvelope
    connect?: Enumerable<EmployeeActivitiesWhereUniqueInput>
  }

  export type EmployeeSchoolsUncheckedCreateNestedManyWithoutEmployeessInput = {
    create?: XOR<Enumerable<EmployeeSchoolsCreateWithoutEmployeessInput>, Enumerable<EmployeeSchoolsUncheckedCreateWithoutEmployeessInput>>
    connectOrCreate?: Enumerable<EmployeeSchoolsCreateOrConnectWithoutEmployeessInput>
    createMany?: EmployeeSchoolsCreateManyEmployeessInputEnvelope
    connect?: Enumerable<EmployeeSchoolsWhereUniqueInput>
  }

  export type EmployeeRolesUncheckedCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<Enumerable<EmployeeRolesCreateWithoutEmployeesInput>, Enumerable<EmployeeRolesUncheckedCreateWithoutEmployeesInput>>
    connectOrCreate?: Enumerable<EmployeeRolesCreateOrConnectWithoutEmployeesInput>
    createMany?: EmployeeRolesCreateManyEmployeesInputEnvelope
    connect?: Enumerable<EmployeeRolesWhereUniqueInput>
  }

  export type EmployeeTeamsUncheckedCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<Enumerable<EmployeeTeamsCreateWithoutEmployeesInput>, Enumerable<EmployeeTeamsUncheckedCreateWithoutEmployeesInput>>
    connectOrCreate?: Enumerable<EmployeeTeamsCreateOrConnectWithoutEmployeesInput>
    createMany?: EmployeeTeamsCreateManyEmployeesInputEnvelope
    connect?: Enumerable<EmployeeTeamsWhereUniqueInput>
  }

  export type EmployeeActivitiesUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<Enumerable<EmployeeActivitiesCreateWithoutEmployeeInput>, Enumerable<EmployeeActivitiesUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<EmployeeActivitiesCreateOrConnectWithoutEmployeeInput>
    createMany?: EmployeeActivitiesCreateManyEmployeeInputEnvelope
    connect?: Enumerable<EmployeeActivitiesWhereUniqueInput>
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: Gender
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EmployeeSchoolsUpdateManyWithoutEmployeessInput = {
    create?: XOR<Enumerable<EmployeeSchoolsCreateWithoutEmployeessInput>, Enumerable<EmployeeSchoolsUncheckedCreateWithoutEmployeessInput>>
    connectOrCreate?: Enumerable<EmployeeSchoolsCreateOrConnectWithoutEmployeessInput>
    upsert?: Enumerable<EmployeeSchoolsUpsertWithWhereUniqueWithoutEmployeessInput>
    createMany?: EmployeeSchoolsCreateManyEmployeessInputEnvelope
    set?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    disconnect?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    delete?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    connect?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    update?: Enumerable<EmployeeSchoolsUpdateWithWhereUniqueWithoutEmployeessInput>
    updateMany?: Enumerable<EmployeeSchoolsUpdateManyWithWhereWithoutEmployeessInput>
    deleteMany?: Enumerable<EmployeeSchoolsScalarWhereInput>
  }

  export type EmployeeRolesUpdateManyWithoutEmployeesInput = {
    create?: XOR<Enumerable<EmployeeRolesCreateWithoutEmployeesInput>, Enumerable<EmployeeRolesUncheckedCreateWithoutEmployeesInput>>
    connectOrCreate?: Enumerable<EmployeeRolesCreateOrConnectWithoutEmployeesInput>
    upsert?: Enumerable<EmployeeRolesUpsertWithWhereUniqueWithoutEmployeesInput>
    createMany?: EmployeeRolesCreateManyEmployeesInputEnvelope
    set?: Enumerable<EmployeeRolesWhereUniqueInput>
    disconnect?: Enumerable<EmployeeRolesWhereUniqueInput>
    delete?: Enumerable<EmployeeRolesWhereUniqueInput>
    connect?: Enumerable<EmployeeRolesWhereUniqueInput>
    update?: Enumerable<EmployeeRolesUpdateWithWhereUniqueWithoutEmployeesInput>
    updateMany?: Enumerable<EmployeeRolesUpdateManyWithWhereWithoutEmployeesInput>
    deleteMany?: Enumerable<EmployeeRolesScalarWhereInput>
  }

  export type EmployeeTeamsUpdateManyWithoutEmployeesInput = {
    create?: XOR<Enumerable<EmployeeTeamsCreateWithoutEmployeesInput>, Enumerable<EmployeeTeamsUncheckedCreateWithoutEmployeesInput>>
    connectOrCreate?: Enumerable<EmployeeTeamsCreateOrConnectWithoutEmployeesInput>
    upsert?: Enumerable<EmployeeTeamsUpsertWithWhereUniqueWithoutEmployeesInput>
    createMany?: EmployeeTeamsCreateManyEmployeesInputEnvelope
    set?: Enumerable<EmployeeTeamsWhereUniqueInput>
    disconnect?: Enumerable<EmployeeTeamsWhereUniqueInput>
    delete?: Enumerable<EmployeeTeamsWhereUniqueInput>
    connect?: Enumerable<EmployeeTeamsWhereUniqueInput>
    update?: Enumerable<EmployeeTeamsUpdateWithWhereUniqueWithoutEmployeesInput>
    updateMany?: Enumerable<EmployeeTeamsUpdateManyWithWhereWithoutEmployeesInput>
    deleteMany?: Enumerable<EmployeeTeamsScalarWhereInput>
  }

  export type EmployeeActivitiesUpdateManyWithoutEmployeeInput = {
    create?: XOR<Enumerable<EmployeeActivitiesCreateWithoutEmployeeInput>, Enumerable<EmployeeActivitiesUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<EmployeeActivitiesCreateOrConnectWithoutEmployeeInput>
    upsert?: Enumerable<EmployeeActivitiesUpsertWithWhereUniqueWithoutEmployeeInput>
    createMany?: EmployeeActivitiesCreateManyEmployeeInputEnvelope
    set?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    disconnect?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    delete?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    connect?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    update?: Enumerable<EmployeeActivitiesUpdateWithWhereUniqueWithoutEmployeeInput>
    updateMany?: Enumerable<EmployeeActivitiesUpdateManyWithWhereWithoutEmployeeInput>
    deleteMany?: Enumerable<EmployeeActivitiesScalarWhereInput>
  }

  export type EmployeeSchoolsUncheckedUpdateManyWithoutEmployeessInput = {
    create?: XOR<Enumerable<EmployeeSchoolsCreateWithoutEmployeessInput>, Enumerable<EmployeeSchoolsUncheckedCreateWithoutEmployeessInput>>
    connectOrCreate?: Enumerable<EmployeeSchoolsCreateOrConnectWithoutEmployeessInput>
    upsert?: Enumerable<EmployeeSchoolsUpsertWithWhereUniqueWithoutEmployeessInput>
    createMany?: EmployeeSchoolsCreateManyEmployeessInputEnvelope
    set?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    disconnect?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    delete?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    connect?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    update?: Enumerable<EmployeeSchoolsUpdateWithWhereUniqueWithoutEmployeessInput>
    updateMany?: Enumerable<EmployeeSchoolsUpdateManyWithWhereWithoutEmployeessInput>
    deleteMany?: Enumerable<EmployeeSchoolsScalarWhereInput>
  }

  export type EmployeeRolesUncheckedUpdateManyWithoutEmployeesInput = {
    create?: XOR<Enumerable<EmployeeRolesCreateWithoutEmployeesInput>, Enumerable<EmployeeRolesUncheckedCreateWithoutEmployeesInput>>
    connectOrCreate?: Enumerable<EmployeeRolesCreateOrConnectWithoutEmployeesInput>
    upsert?: Enumerable<EmployeeRolesUpsertWithWhereUniqueWithoutEmployeesInput>
    createMany?: EmployeeRolesCreateManyEmployeesInputEnvelope
    set?: Enumerable<EmployeeRolesWhereUniqueInput>
    disconnect?: Enumerable<EmployeeRolesWhereUniqueInput>
    delete?: Enumerable<EmployeeRolesWhereUniqueInput>
    connect?: Enumerable<EmployeeRolesWhereUniqueInput>
    update?: Enumerable<EmployeeRolesUpdateWithWhereUniqueWithoutEmployeesInput>
    updateMany?: Enumerable<EmployeeRolesUpdateManyWithWhereWithoutEmployeesInput>
    deleteMany?: Enumerable<EmployeeRolesScalarWhereInput>
  }

  export type EmployeeTeamsUncheckedUpdateManyWithoutEmployeesInput = {
    create?: XOR<Enumerable<EmployeeTeamsCreateWithoutEmployeesInput>, Enumerable<EmployeeTeamsUncheckedCreateWithoutEmployeesInput>>
    connectOrCreate?: Enumerable<EmployeeTeamsCreateOrConnectWithoutEmployeesInput>
    upsert?: Enumerable<EmployeeTeamsUpsertWithWhereUniqueWithoutEmployeesInput>
    createMany?: EmployeeTeamsCreateManyEmployeesInputEnvelope
    set?: Enumerable<EmployeeTeamsWhereUniqueInput>
    disconnect?: Enumerable<EmployeeTeamsWhereUniqueInput>
    delete?: Enumerable<EmployeeTeamsWhereUniqueInput>
    connect?: Enumerable<EmployeeTeamsWhereUniqueInput>
    update?: Enumerable<EmployeeTeamsUpdateWithWhereUniqueWithoutEmployeesInput>
    updateMany?: Enumerable<EmployeeTeamsUpdateManyWithWhereWithoutEmployeesInput>
    deleteMany?: Enumerable<EmployeeTeamsScalarWhereInput>
  }

  export type EmployeeActivitiesUncheckedUpdateManyWithoutEmployeeInput = {
    create?: XOR<Enumerable<EmployeeActivitiesCreateWithoutEmployeeInput>, Enumerable<EmployeeActivitiesUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<EmployeeActivitiesCreateOrConnectWithoutEmployeeInput>
    upsert?: Enumerable<EmployeeActivitiesUpsertWithWhereUniqueWithoutEmployeeInput>
    createMany?: EmployeeActivitiesCreateManyEmployeeInputEnvelope
    set?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    disconnect?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    delete?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    connect?: Enumerable<EmployeeActivitiesWhereUniqueInput>
    update?: Enumerable<EmployeeActivitiesUpdateWithWhereUniqueWithoutEmployeeInput>
    updateMany?: Enumerable<EmployeeActivitiesUpdateManyWithWhereWithoutEmployeeInput>
    deleteMany?: Enumerable<EmployeeActivitiesScalarWhereInput>
  }

  export type RolesCreateNestedOneWithoutTeamInput = {
    create?: XOR<RolesCreateWithoutTeamInput, RolesUncheckedCreateWithoutTeamInput>
    connectOrCreate?: RolesCreateOrConnectWithoutTeamInput
    connect?: RolesWhereUniqueInput
  }

  export type EmployeesCreateNestedOneWithoutTeamsInput = {
    create?: XOR<EmployeesCreateWithoutTeamsInput, EmployeesUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutTeamsInput
    connect?: EmployeesWhereUniqueInput
  }

  export type TeamsCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<TeamsCreateWithoutEmployeesInput, TeamsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutEmployeesInput
    connect?: TeamsWhereUniqueInput
  }

  export type RolesUpdateOneRequiredWithoutTeamInput = {
    create?: XOR<RolesCreateWithoutTeamInput, RolesUncheckedCreateWithoutTeamInput>
    connectOrCreate?: RolesCreateOrConnectWithoutTeamInput
    upsert?: RolesUpsertWithoutTeamInput
    connect?: RolesWhereUniqueInput
    update?: XOR<RolesUpdateWithoutTeamInput, RolesUncheckedUpdateWithoutTeamInput>
  }

  export type EmployeesUpdateOneRequiredWithoutTeamsInput = {
    create?: XOR<EmployeesCreateWithoutTeamsInput, EmployeesUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutTeamsInput
    upsert?: EmployeesUpsertWithoutTeamsInput
    connect?: EmployeesWhereUniqueInput
    update?: XOR<EmployeesUpdateWithoutTeamsInput, EmployeesUncheckedUpdateWithoutTeamsInput>
  }

  export type TeamsUpdateOneRequiredWithoutEmployeesInput = {
    create?: XOR<TeamsCreateWithoutEmployeesInput, TeamsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutEmployeesInput
    upsert?: TeamsUpsertWithoutEmployeesInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<TeamsUpdateWithoutEmployeesInput, TeamsUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeesCreateNestedOneWithoutSchoolsInput = {
    create?: XOR<EmployeesCreateWithoutSchoolsInput, EmployeesUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutSchoolsInput
    connect?: EmployeesWhereUniqueInput
  }

  export type SchoolsCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<SchoolsCreateWithoutEmployeesInput, SchoolsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: SchoolsCreateOrConnectWithoutEmployeesInput
    connect?: SchoolsWhereUniqueInput
  }

  export type EmployeesUpdateOneRequiredWithoutSchoolsInput = {
    create?: XOR<EmployeesCreateWithoutSchoolsInput, EmployeesUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutSchoolsInput
    upsert?: EmployeesUpsertWithoutSchoolsInput
    connect?: EmployeesWhereUniqueInput
    update?: XOR<EmployeesUpdateWithoutSchoolsInput, EmployeesUncheckedUpdateWithoutSchoolsInput>
  }

  export type SchoolsUpdateOneRequiredWithoutEmployeesInput = {
    create?: XOR<SchoolsCreateWithoutEmployeesInput, SchoolsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: SchoolsCreateOrConnectWithoutEmployeesInput
    upsert?: SchoolsUpsertWithoutEmployeesInput
    connect?: SchoolsWhereUniqueInput
    update?: XOR<SchoolsUpdateWithoutEmployeesInput, SchoolsUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeSchoolsCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<Enumerable<EmployeeSchoolsCreateWithoutSchoolsInput>, Enumerable<EmployeeSchoolsUncheckedCreateWithoutSchoolsInput>>
    connectOrCreate?: Enumerable<EmployeeSchoolsCreateOrConnectWithoutSchoolsInput>
    createMany?: EmployeeSchoolsCreateManySchoolsInputEnvelope
    connect?: Enumerable<EmployeeSchoolsWhereUniqueInput>
  }

  export type EmployeeSchoolsUncheckedCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<Enumerable<EmployeeSchoolsCreateWithoutSchoolsInput>, Enumerable<EmployeeSchoolsUncheckedCreateWithoutSchoolsInput>>
    connectOrCreate?: Enumerable<EmployeeSchoolsCreateOrConnectWithoutSchoolsInput>
    createMany?: EmployeeSchoolsCreateManySchoolsInputEnvelope
    connect?: Enumerable<EmployeeSchoolsWhereUniqueInput>
  }

  export type EnumSchoolLevelFieldUpdateOperationsInput = {
    set?: SchoolLevel
  }

  export type EmployeeSchoolsUpdateManyWithoutSchoolsInput = {
    create?: XOR<Enumerable<EmployeeSchoolsCreateWithoutSchoolsInput>, Enumerable<EmployeeSchoolsUncheckedCreateWithoutSchoolsInput>>
    connectOrCreate?: Enumerable<EmployeeSchoolsCreateOrConnectWithoutSchoolsInput>
    upsert?: Enumerable<EmployeeSchoolsUpsertWithWhereUniqueWithoutSchoolsInput>
    createMany?: EmployeeSchoolsCreateManySchoolsInputEnvelope
    set?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    disconnect?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    delete?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    connect?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    update?: Enumerable<EmployeeSchoolsUpdateWithWhereUniqueWithoutSchoolsInput>
    updateMany?: Enumerable<EmployeeSchoolsUpdateManyWithWhereWithoutSchoolsInput>
    deleteMany?: Enumerable<EmployeeSchoolsScalarWhereInput>
  }

  export type EmployeeSchoolsUncheckedUpdateManyWithoutSchoolsInput = {
    create?: XOR<Enumerable<EmployeeSchoolsCreateWithoutSchoolsInput>, Enumerable<EmployeeSchoolsUncheckedCreateWithoutSchoolsInput>>
    connectOrCreate?: Enumerable<EmployeeSchoolsCreateOrConnectWithoutSchoolsInput>
    upsert?: Enumerable<EmployeeSchoolsUpsertWithWhereUniqueWithoutSchoolsInput>
    createMany?: EmployeeSchoolsCreateManySchoolsInputEnvelope
    set?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    disconnect?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    delete?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    connect?: Enumerable<EmployeeSchoolsWhereUniqueInput>
    update?: Enumerable<EmployeeSchoolsUpdateWithWhereUniqueWithoutSchoolsInput>
    updateMany?: Enumerable<EmployeeSchoolsUpdateManyWithWhereWithoutSchoolsInput>
    deleteMany?: Enumerable<EmployeeSchoolsScalarWhereInput>
  }

  export type EmployeeTeamsCreateNestedManyWithoutTeamsInput = {
    create?: XOR<Enumerable<EmployeeTeamsCreateWithoutTeamsInput>, Enumerable<EmployeeTeamsUncheckedCreateWithoutTeamsInput>>
    connectOrCreate?: Enumerable<EmployeeTeamsCreateOrConnectWithoutTeamsInput>
    createMany?: EmployeeTeamsCreateManyTeamsInputEnvelope
    connect?: Enumerable<EmployeeTeamsWhereUniqueInput>
  }

  export type EmployeeTeamsUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<Enumerable<EmployeeTeamsCreateWithoutTeamsInput>, Enumerable<EmployeeTeamsUncheckedCreateWithoutTeamsInput>>
    connectOrCreate?: Enumerable<EmployeeTeamsCreateOrConnectWithoutTeamsInput>
    createMany?: EmployeeTeamsCreateManyTeamsInputEnvelope
    connect?: Enumerable<EmployeeTeamsWhereUniqueInput>
  }

  export type EmployeeTeamsUpdateManyWithoutTeamsInput = {
    create?: XOR<Enumerable<EmployeeTeamsCreateWithoutTeamsInput>, Enumerable<EmployeeTeamsUncheckedCreateWithoutTeamsInput>>
    connectOrCreate?: Enumerable<EmployeeTeamsCreateOrConnectWithoutTeamsInput>
    upsert?: Enumerable<EmployeeTeamsUpsertWithWhereUniqueWithoutTeamsInput>
    createMany?: EmployeeTeamsCreateManyTeamsInputEnvelope
    set?: Enumerable<EmployeeTeamsWhereUniqueInput>
    disconnect?: Enumerable<EmployeeTeamsWhereUniqueInput>
    delete?: Enumerable<EmployeeTeamsWhereUniqueInput>
    connect?: Enumerable<EmployeeTeamsWhereUniqueInput>
    update?: Enumerable<EmployeeTeamsUpdateWithWhereUniqueWithoutTeamsInput>
    updateMany?: Enumerable<EmployeeTeamsUpdateManyWithWhereWithoutTeamsInput>
    deleteMany?: Enumerable<EmployeeTeamsScalarWhereInput>
  }

  export type EmployeeTeamsUncheckedUpdateManyWithoutTeamsInput = {
    create?: XOR<Enumerable<EmployeeTeamsCreateWithoutTeamsInput>, Enumerable<EmployeeTeamsUncheckedCreateWithoutTeamsInput>>
    connectOrCreate?: Enumerable<EmployeeTeamsCreateOrConnectWithoutTeamsInput>
    upsert?: Enumerable<EmployeeTeamsUpsertWithWhereUniqueWithoutTeamsInput>
    createMany?: EmployeeTeamsCreateManyTeamsInputEnvelope
    set?: Enumerable<EmployeeTeamsWhereUniqueInput>
    disconnect?: Enumerable<EmployeeTeamsWhereUniqueInput>
    delete?: Enumerable<EmployeeTeamsWhereUniqueInput>
    connect?: Enumerable<EmployeeTeamsWhereUniqueInput>
    update?: Enumerable<EmployeeTeamsUpdateWithWhereUniqueWithoutTeamsInput>
    updateMany?: Enumerable<EmployeeTeamsUpdateManyWithWhereWithoutTeamsInput>
    deleteMany?: Enumerable<EmployeeTeamsScalarWhereInput>
  }

  export type EmployeesCreateNestedOneWithoutRolesInput = {
    create?: XOR<EmployeesCreateWithoutRolesInput, EmployeesUncheckedCreateWithoutRolesInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutRolesInput
    connect?: EmployeesWhereUniqueInput
  }

  export type RolesCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<RolesCreateWithoutEmployeesInput, RolesUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: RolesCreateOrConnectWithoutEmployeesInput
    connect?: RolesWhereUniqueInput
  }

  export type EmployeesUpdateOneRequiredWithoutRolesInput = {
    create?: XOR<EmployeesCreateWithoutRolesInput, EmployeesUncheckedCreateWithoutRolesInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutRolesInput
    upsert?: EmployeesUpsertWithoutRolesInput
    connect?: EmployeesWhereUniqueInput
    update?: XOR<EmployeesUpdateWithoutRolesInput, EmployeesUncheckedUpdateWithoutRolesInput>
  }

  export type RolesUpdateOneRequiredWithoutEmployeesInput = {
    create?: XOR<RolesCreateWithoutEmployeesInput, RolesUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: RolesCreateOrConnectWithoutEmployeesInput
    upsert?: RolesUpsertWithoutEmployeesInput
    connect?: RolesWhereUniqueInput
    update?: XOR<RolesUpdateWithoutEmployeesInput, RolesUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeRolesCreateNestedManyWithoutRolesInput = {
    create?: XOR<Enumerable<EmployeeRolesCreateWithoutRolesInput>, Enumerable<EmployeeRolesUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<EmployeeRolesCreateOrConnectWithoutRolesInput>
    createMany?: EmployeeRolesCreateManyRolesInputEnvelope
    connect?: Enumerable<EmployeeRolesWhereUniqueInput>
  }

  export type EmployeeTeamsCreateNestedManyWithoutRoleInput = {
    create?: XOR<Enumerable<EmployeeTeamsCreateWithoutRoleInput>, Enumerable<EmployeeTeamsUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<EmployeeTeamsCreateOrConnectWithoutRoleInput>
    createMany?: EmployeeTeamsCreateManyRoleInputEnvelope
    connect?: Enumerable<EmployeeTeamsWhereUniqueInput>
  }

  export type EmployeeRolesUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<Enumerable<EmployeeRolesCreateWithoutRolesInput>, Enumerable<EmployeeRolesUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<EmployeeRolesCreateOrConnectWithoutRolesInput>
    createMany?: EmployeeRolesCreateManyRolesInputEnvelope
    connect?: Enumerable<EmployeeRolesWhereUniqueInput>
  }

  export type EmployeeTeamsUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<Enumerable<EmployeeTeamsCreateWithoutRoleInput>, Enumerable<EmployeeTeamsUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<EmployeeTeamsCreateOrConnectWithoutRoleInput>
    createMany?: EmployeeTeamsCreateManyRoleInputEnvelope
    connect?: Enumerable<EmployeeTeamsWhereUniqueInput>
  }

  export type EmployeeRolesUpdateManyWithoutRolesInput = {
    create?: XOR<Enumerable<EmployeeRolesCreateWithoutRolesInput>, Enumerable<EmployeeRolesUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<EmployeeRolesCreateOrConnectWithoutRolesInput>
    upsert?: Enumerable<EmployeeRolesUpsertWithWhereUniqueWithoutRolesInput>
    createMany?: EmployeeRolesCreateManyRolesInputEnvelope
    set?: Enumerable<EmployeeRolesWhereUniqueInput>
    disconnect?: Enumerable<EmployeeRolesWhereUniqueInput>
    delete?: Enumerable<EmployeeRolesWhereUniqueInput>
    connect?: Enumerable<EmployeeRolesWhereUniqueInput>
    update?: Enumerable<EmployeeRolesUpdateWithWhereUniqueWithoutRolesInput>
    updateMany?: Enumerable<EmployeeRolesUpdateManyWithWhereWithoutRolesInput>
    deleteMany?: Enumerable<EmployeeRolesScalarWhereInput>
  }

  export type EmployeeTeamsUpdateManyWithoutRoleInput = {
    create?: XOR<Enumerable<EmployeeTeamsCreateWithoutRoleInput>, Enumerable<EmployeeTeamsUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<EmployeeTeamsCreateOrConnectWithoutRoleInput>
    upsert?: Enumerable<EmployeeTeamsUpsertWithWhereUniqueWithoutRoleInput>
    createMany?: EmployeeTeamsCreateManyRoleInputEnvelope
    set?: Enumerable<EmployeeTeamsWhereUniqueInput>
    disconnect?: Enumerable<EmployeeTeamsWhereUniqueInput>
    delete?: Enumerable<EmployeeTeamsWhereUniqueInput>
    connect?: Enumerable<EmployeeTeamsWhereUniqueInput>
    update?: Enumerable<EmployeeTeamsUpdateWithWhereUniqueWithoutRoleInput>
    updateMany?: Enumerable<EmployeeTeamsUpdateManyWithWhereWithoutRoleInput>
    deleteMany?: Enumerable<EmployeeTeamsScalarWhereInput>
  }

  export type EmployeeRolesUncheckedUpdateManyWithoutRolesInput = {
    create?: XOR<Enumerable<EmployeeRolesCreateWithoutRolesInput>, Enumerable<EmployeeRolesUncheckedCreateWithoutRolesInput>>
    connectOrCreate?: Enumerable<EmployeeRolesCreateOrConnectWithoutRolesInput>
    upsert?: Enumerable<EmployeeRolesUpsertWithWhereUniqueWithoutRolesInput>
    createMany?: EmployeeRolesCreateManyRolesInputEnvelope
    set?: Enumerable<EmployeeRolesWhereUniqueInput>
    disconnect?: Enumerable<EmployeeRolesWhereUniqueInput>
    delete?: Enumerable<EmployeeRolesWhereUniqueInput>
    connect?: Enumerable<EmployeeRolesWhereUniqueInput>
    update?: Enumerable<EmployeeRolesUpdateWithWhereUniqueWithoutRolesInput>
    updateMany?: Enumerable<EmployeeRolesUpdateManyWithWhereWithoutRolesInput>
    deleteMany?: Enumerable<EmployeeRolesScalarWhereInput>
  }

  export type EmployeeTeamsUncheckedUpdateManyWithoutRoleInput = {
    create?: XOR<Enumerable<EmployeeTeamsCreateWithoutRoleInput>, Enumerable<EmployeeTeamsUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<EmployeeTeamsCreateOrConnectWithoutRoleInput>
    upsert?: Enumerable<EmployeeTeamsUpsertWithWhereUniqueWithoutRoleInput>
    createMany?: EmployeeTeamsCreateManyRoleInputEnvelope
    set?: Enumerable<EmployeeTeamsWhereUniqueInput>
    disconnect?: Enumerable<EmployeeTeamsWhereUniqueInput>
    delete?: Enumerable<EmployeeTeamsWhereUniqueInput>
    connect?: Enumerable<EmployeeTeamsWhereUniqueInput>
    update?: Enumerable<EmployeeTeamsUpdateWithWhereUniqueWithoutRoleInput>
    updateMany?: Enumerable<EmployeeTeamsUpdateManyWithWhereWithoutRoleInput>
    deleteMany?: Enumerable<EmployeeTeamsScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumGenderFilter = {
    equals?: Gender
    in?: Enumerable<Gender>
    notIn?: Enumerable<Gender>
    not?: NestedEnumGenderFilter | Gender
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumGenderWithAggregatesFilter = {
    equals?: Gender
    in?: Enumerable<Gender>
    notIn?: Enumerable<Gender>
    not?: NestedEnumGenderWithAggregatesFilter | Gender
    _count?: NestedIntFilter
    _min?: NestedEnumGenderFilter
    _max?: NestedEnumGenderFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumSchoolLevelFilter = {
    equals?: SchoolLevel
    in?: Enumerable<SchoolLevel>
    notIn?: Enumerable<SchoolLevel>
    not?: NestedEnumSchoolLevelFilter | SchoolLevel
  }

  export type NestedEnumSchoolLevelWithAggregatesFilter = {
    equals?: SchoolLevel
    in?: Enumerable<SchoolLevel>
    notIn?: Enumerable<SchoolLevel>
    not?: NestedEnumSchoolLevelWithAggregatesFilter | SchoolLevel
    _count?: NestedIntFilter
    _min?: NestedEnumSchoolLevelFilter
    _max?: NestedEnumSchoolLevelFilter
  }

  export type EmployeeActivitiesCreateWithoutActivityInput = {
    employee: EmployeesCreateNestedOneWithoutActivitiesInput
  }

  export type EmployeeActivitiesUncheckedCreateWithoutActivityInput = {
    id?: number
    employeeId: number
  }

  export type EmployeeActivitiesCreateOrConnectWithoutActivityInput = {
    where: EmployeeActivitiesWhereUniqueInput
    create: XOR<EmployeeActivitiesCreateWithoutActivityInput, EmployeeActivitiesUncheckedCreateWithoutActivityInput>
  }

  export type EmployeeActivitiesCreateManyActivityInputEnvelope = {
    data: Enumerable<EmployeeActivitiesCreateManyActivityInput>
    skipDuplicates?: boolean
  }

  export type EmployeeActivitiesUpsertWithWhereUniqueWithoutActivityInput = {
    where: EmployeeActivitiesWhereUniqueInput
    update: XOR<EmployeeActivitiesUpdateWithoutActivityInput, EmployeeActivitiesUncheckedUpdateWithoutActivityInput>
    create: XOR<EmployeeActivitiesCreateWithoutActivityInput, EmployeeActivitiesUncheckedCreateWithoutActivityInput>
  }

  export type EmployeeActivitiesUpdateWithWhereUniqueWithoutActivityInput = {
    where: EmployeeActivitiesWhereUniqueInput
    data: XOR<EmployeeActivitiesUpdateWithoutActivityInput, EmployeeActivitiesUncheckedUpdateWithoutActivityInput>
  }

  export type EmployeeActivitiesUpdateManyWithWhereWithoutActivityInput = {
    where: EmployeeActivitiesScalarWhereInput
    data: XOR<EmployeeActivitiesUpdateManyMutationInput, EmployeeActivitiesUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type EmployeeActivitiesScalarWhereInput = {
    AND?: Enumerable<EmployeeActivitiesScalarWhereInput>
    OR?: Enumerable<EmployeeActivitiesScalarWhereInput>
    NOT?: Enumerable<EmployeeActivitiesScalarWhereInput>
    id?: IntFilter | number
    employeeId?: IntFilter | number
    activityId?: IntFilter | number
  }

  export type EmployeesCreateWithoutActivitiesInput = {
    name: string
    email: string
    gender?: Gender
    placeOfBirth: string
    dateOfBirth: Date | string
    marriageStatus?: boolean
    photo?: string | null
    address?: string | null
    officeEmail?: string | null
    officeEmailPassword?: string | null
    status?: string | null
    handphone?: string | null
    startWork?: Date | string
    endWork?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: EmployeeSchoolsCreateNestedManyWithoutEmployeessInput
    roles?: EmployeeRolesCreateNestedManyWithoutEmployeesInput
    teams?: EmployeeTeamsCreateNestedManyWithoutEmployeesInput
  }

  export type EmployeesUncheckedCreateWithoutActivitiesInput = {
    id?: number
    name: string
    email: string
    gender?: Gender
    placeOfBirth: string
    dateOfBirth: Date | string
    marriageStatus?: boolean
    photo?: string | null
    address?: string | null
    officeEmail?: string | null
    officeEmailPassword?: string | null
    status?: string | null
    handphone?: string | null
    startWork?: Date | string
    endWork?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: EmployeeSchoolsUncheckedCreateNestedManyWithoutEmployeessInput
    roles?: EmployeeRolesUncheckedCreateNestedManyWithoutEmployeesInput
    teams?: EmployeeTeamsUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type EmployeesCreateOrConnectWithoutActivitiesInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutActivitiesInput, EmployeesUncheckedCreateWithoutActivitiesInput>
  }

  export type ActivitiesCreateWithoutEmployeesInput = {
    name: string
    venue?: string | null
    status?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    detail?: string | null
    photo?: string | null
  }

  export type ActivitiesUncheckedCreateWithoutEmployeesInput = {
    id?: number
    name: string
    venue?: string | null
    status?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    detail?: string | null
    photo?: string | null
  }

  export type ActivitiesCreateOrConnectWithoutEmployeesInput = {
    where: ActivitiesWhereUniqueInput
    create: XOR<ActivitiesCreateWithoutEmployeesInput, ActivitiesUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeesUpsertWithoutActivitiesInput = {
    update: XOR<EmployeesUpdateWithoutActivitiesInput, EmployeesUncheckedUpdateWithoutActivitiesInput>
    create: XOR<EmployeesCreateWithoutActivitiesInput, EmployeesUncheckedCreateWithoutActivitiesInput>
  }

  export type EmployeesUpdateWithoutActivitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    marriageStatus?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmailPassword?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    handphone?: NullableStringFieldUpdateOperationsInput | string | null
    startWork?: DateTimeFieldUpdateOperationsInput | Date | string
    endWork?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: EmployeeSchoolsUpdateManyWithoutEmployeessInput
    roles?: EmployeeRolesUpdateManyWithoutEmployeesInput
    teams?: EmployeeTeamsUpdateManyWithoutEmployeesInput
  }

  export type EmployeesUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    marriageStatus?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmailPassword?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    handphone?: NullableStringFieldUpdateOperationsInput | string | null
    startWork?: DateTimeFieldUpdateOperationsInput | Date | string
    endWork?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: EmployeeSchoolsUncheckedUpdateManyWithoutEmployeessInput
    roles?: EmployeeRolesUncheckedUpdateManyWithoutEmployeesInput
    teams?: EmployeeTeamsUncheckedUpdateManyWithoutEmployeesInput
  }

  export type ActivitiesUpsertWithoutEmployeesInput = {
    update: XOR<ActivitiesUpdateWithoutEmployeesInput, ActivitiesUncheckedUpdateWithoutEmployeesInput>
    create: XOR<ActivitiesCreateWithoutEmployeesInput, ActivitiesUncheckedCreateWithoutEmployeesInput>
  }

  export type ActivitiesUpdateWithoutEmployeesInput = {
    name?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivitiesUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeSchoolsCreateWithoutEmployeessInput = {
    graduateYear?: number
    schools: SchoolsCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeSchoolsUncheckedCreateWithoutEmployeessInput = {
    id?: number
    graduateYear?: number
    schoolId: number
  }

  export type EmployeeSchoolsCreateOrConnectWithoutEmployeessInput = {
    where: EmployeeSchoolsWhereUniqueInput
    create: XOR<EmployeeSchoolsCreateWithoutEmployeessInput, EmployeeSchoolsUncheckedCreateWithoutEmployeessInput>
  }

  export type EmployeeSchoolsCreateManyEmployeessInputEnvelope = {
    data: Enumerable<EmployeeSchoolsCreateManyEmployeessInput>
    skipDuplicates?: boolean
  }

  export type EmployeeRolesCreateWithoutEmployeesInput = {
    roles: RolesCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeRolesUncheckedCreateWithoutEmployeesInput = {
    id?: number
    roleId: number
  }

  export type EmployeeRolesCreateOrConnectWithoutEmployeesInput = {
    where: EmployeeRolesWhereUniqueInput
    create: XOR<EmployeeRolesCreateWithoutEmployeesInput, EmployeeRolesUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeRolesCreateManyEmployeesInputEnvelope = {
    data: Enumerable<EmployeeRolesCreateManyEmployeesInput>
    skipDuplicates?: boolean
  }

  export type EmployeeTeamsCreateWithoutEmployeesInput = {
    code: string
    role?: RolesCreateNestedOneWithoutTeamInput
    teams: TeamsCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeTeamsUncheckedCreateWithoutEmployeesInput = {
    teamId: number
    code: string
    roleId?: number
    id?: number
  }

  export type EmployeeTeamsCreateOrConnectWithoutEmployeesInput = {
    where: EmployeeTeamsWhereUniqueInput
    create: XOR<EmployeeTeamsCreateWithoutEmployeesInput, EmployeeTeamsUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeTeamsCreateManyEmployeesInputEnvelope = {
    data: Enumerable<EmployeeTeamsCreateManyEmployeesInput>
    skipDuplicates?: boolean
  }

  export type EmployeeActivitiesCreateWithoutEmployeeInput = {
    activity: ActivitiesCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeActivitiesUncheckedCreateWithoutEmployeeInput = {
    id?: number
    activityId: number
  }

  export type EmployeeActivitiesCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeActivitiesWhereUniqueInput
    create: XOR<EmployeeActivitiesCreateWithoutEmployeeInput, EmployeeActivitiesUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeActivitiesCreateManyEmployeeInputEnvelope = {
    data: Enumerable<EmployeeActivitiesCreateManyEmployeeInput>
    skipDuplicates?: boolean
  }

  export type EmployeeSchoolsUpsertWithWhereUniqueWithoutEmployeessInput = {
    where: EmployeeSchoolsWhereUniqueInput
    update: XOR<EmployeeSchoolsUpdateWithoutEmployeessInput, EmployeeSchoolsUncheckedUpdateWithoutEmployeessInput>
    create: XOR<EmployeeSchoolsCreateWithoutEmployeessInput, EmployeeSchoolsUncheckedCreateWithoutEmployeessInput>
  }

  export type EmployeeSchoolsUpdateWithWhereUniqueWithoutEmployeessInput = {
    where: EmployeeSchoolsWhereUniqueInput
    data: XOR<EmployeeSchoolsUpdateWithoutEmployeessInput, EmployeeSchoolsUncheckedUpdateWithoutEmployeessInput>
  }

  export type EmployeeSchoolsUpdateManyWithWhereWithoutEmployeessInput = {
    where: EmployeeSchoolsScalarWhereInput
    data: XOR<EmployeeSchoolsUpdateManyMutationInput, EmployeeSchoolsUncheckedUpdateManyWithoutSchoolsInput>
  }

  export type EmployeeSchoolsScalarWhereInput = {
    AND?: Enumerable<EmployeeSchoolsScalarWhereInput>
    OR?: Enumerable<EmployeeSchoolsScalarWhereInput>
    NOT?: Enumerable<EmployeeSchoolsScalarWhereInput>
    id?: IntFilter | number
    graduateYear?: IntFilter | number
    employeeId?: IntFilter | number
    schoolId?: IntFilter | number
  }

  export type EmployeeRolesUpsertWithWhereUniqueWithoutEmployeesInput = {
    where: EmployeeRolesWhereUniqueInput
    update: XOR<EmployeeRolesUpdateWithoutEmployeesInput, EmployeeRolesUncheckedUpdateWithoutEmployeesInput>
    create: XOR<EmployeeRolesCreateWithoutEmployeesInput, EmployeeRolesUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeRolesUpdateWithWhereUniqueWithoutEmployeesInput = {
    where: EmployeeRolesWhereUniqueInput
    data: XOR<EmployeeRolesUpdateWithoutEmployeesInput, EmployeeRolesUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeRolesUpdateManyWithWhereWithoutEmployeesInput = {
    where: EmployeeRolesScalarWhereInput
    data: XOR<EmployeeRolesUpdateManyMutationInput, EmployeeRolesUncheckedUpdateManyWithoutRolesInput>
  }

  export type EmployeeRolesScalarWhereInput = {
    AND?: Enumerable<EmployeeRolesScalarWhereInput>
    OR?: Enumerable<EmployeeRolesScalarWhereInput>
    NOT?: Enumerable<EmployeeRolesScalarWhereInput>
    id?: IntFilter | number
    employeeId?: IntFilter | number
    roleId?: IntFilter | number
  }

  export type EmployeeTeamsUpsertWithWhereUniqueWithoutEmployeesInput = {
    where: EmployeeTeamsWhereUniqueInput
    update: XOR<EmployeeTeamsUpdateWithoutEmployeesInput, EmployeeTeamsUncheckedUpdateWithoutEmployeesInput>
    create: XOR<EmployeeTeamsCreateWithoutEmployeesInput, EmployeeTeamsUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeTeamsUpdateWithWhereUniqueWithoutEmployeesInput = {
    where: EmployeeTeamsWhereUniqueInput
    data: XOR<EmployeeTeamsUpdateWithoutEmployeesInput, EmployeeTeamsUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeTeamsUpdateManyWithWhereWithoutEmployeesInput = {
    where: EmployeeTeamsScalarWhereInput
    data: XOR<EmployeeTeamsUpdateManyMutationInput, EmployeeTeamsUncheckedUpdateManyWithoutTeamsInput>
  }

  export type EmployeeTeamsScalarWhereInput = {
    AND?: Enumerable<EmployeeTeamsScalarWhereInput>
    OR?: Enumerable<EmployeeTeamsScalarWhereInput>
    NOT?: Enumerable<EmployeeTeamsScalarWhereInput>
    employeeId?: IntFilter | number
    teamId?: IntFilter | number
    code?: StringFilter | string
    roleId?: IntFilter | number
    id?: IntFilter | number
  }

  export type EmployeeActivitiesUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeActivitiesWhereUniqueInput
    update: XOR<EmployeeActivitiesUpdateWithoutEmployeeInput, EmployeeActivitiesUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeActivitiesCreateWithoutEmployeeInput, EmployeeActivitiesUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeActivitiesUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeActivitiesWhereUniqueInput
    data: XOR<EmployeeActivitiesUpdateWithoutEmployeeInput, EmployeeActivitiesUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeActivitiesUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeeActivitiesScalarWhereInput
    data: XOR<EmployeeActivitiesUpdateManyMutationInput, EmployeeActivitiesUncheckedUpdateManyWithoutActivitiesInput>
  }

  export type RolesCreateWithoutTeamInput = {
    name: string
    detail?: string
    employees?: EmployeeRolesCreateNestedManyWithoutRolesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolesUncheckedCreateWithoutTeamInput = {
    id?: number
    name: string
    detail?: string
    employees?: EmployeeRolesUncheckedCreateNestedManyWithoutRolesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolesCreateOrConnectWithoutTeamInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutTeamInput, RolesUncheckedCreateWithoutTeamInput>
  }

  export type EmployeesCreateWithoutTeamsInput = {
    name: string
    email: string
    gender?: Gender
    placeOfBirth: string
    dateOfBirth: Date | string
    marriageStatus?: boolean
    photo?: string | null
    address?: string | null
    officeEmail?: string | null
    officeEmailPassword?: string | null
    status?: string | null
    handphone?: string | null
    startWork?: Date | string
    endWork?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: EmployeeSchoolsCreateNestedManyWithoutEmployeessInput
    roles?: EmployeeRolesCreateNestedManyWithoutEmployeesInput
    activities?: EmployeeActivitiesCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesUncheckedCreateWithoutTeamsInput = {
    id?: number
    name: string
    email: string
    gender?: Gender
    placeOfBirth: string
    dateOfBirth: Date | string
    marriageStatus?: boolean
    photo?: string | null
    address?: string | null
    officeEmail?: string | null
    officeEmailPassword?: string | null
    status?: string | null
    handphone?: string | null
    startWork?: Date | string
    endWork?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: EmployeeSchoolsUncheckedCreateNestedManyWithoutEmployeessInput
    roles?: EmployeeRolesUncheckedCreateNestedManyWithoutEmployeesInput
    activities?: EmployeeActivitiesUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesCreateOrConnectWithoutTeamsInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutTeamsInput, EmployeesUncheckedCreateWithoutTeamsInput>
  }

  export type TeamsCreateWithoutEmployeesInput = {
    name: string
    code: string
    address?: string | null
    image?: string | null
  }

  export type TeamsUncheckedCreateWithoutEmployeesInput = {
    id?: number
    name: string
    code: string
    address?: string | null
    image?: string | null
  }

  export type TeamsCreateOrConnectWithoutEmployeesInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutEmployeesInput, TeamsUncheckedCreateWithoutEmployeesInput>
  }

  export type RolesUpsertWithoutTeamInput = {
    update: XOR<RolesUpdateWithoutTeamInput, RolesUncheckedUpdateWithoutTeamInput>
    create: XOR<RolesCreateWithoutTeamInput, RolesUncheckedCreateWithoutTeamInput>
  }

  export type RolesUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeRolesUpdateManyWithoutRolesInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeRolesUncheckedUpdateManyWithoutRolesInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeesUpsertWithoutTeamsInput = {
    update: XOR<EmployeesUpdateWithoutTeamsInput, EmployeesUncheckedUpdateWithoutTeamsInput>
    create: XOR<EmployeesCreateWithoutTeamsInput, EmployeesUncheckedCreateWithoutTeamsInput>
  }

  export type EmployeesUpdateWithoutTeamsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    marriageStatus?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmailPassword?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    handphone?: NullableStringFieldUpdateOperationsInput | string | null
    startWork?: DateTimeFieldUpdateOperationsInput | Date | string
    endWork?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: EmployeeSchoolsUpdateManyWithoutEmployeessInput
    roles?: EmployeeRolesUpdateManyWithoutEmployeesInput
    activities?: EmployeeActivitiesUpdateManyWithoutEmployeeInput
  }

  export type EmployeesUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    marriageStatus?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmailPassword?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    handphone?: NullableStringFieldUpdateOperationsInput | string | null
    startWork?: DateTimeFieldUpdateOperationsInput | Date | string
    endWork?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: EmployeeSchoolsUncheckedUpdateManyWithoutEmployeessInput
    roles?: EmployeeRolesUncheckedUpdateManyWithoutEmployeesInput
    activities?: EmployeeActivitiesUncheckedUpdateManyWithoutEmployeeInput
  }

  export type TeamsUpsertWithoutEmployeesInput = {
    update: XOR<TeamsUpdateWithoutEmployeesInput, TeamsUncheckedUpdateWithoutEmployeesInput>
    create: XOR<TeamsCreateWithoutEmployeesInput, TeamsUncheckedCreateWithoutEmployeesInput>
  }

  export type TeamsUpdateWithoutEmployeesInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamsUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeesCreateWithoutSchoolsInput = {
    name: string
    email: string
    gender?: Gender
    placeOfBirth: string
    dateOfBirth: Date | string
    marriageStatus?: boolean
    photo?: string | null
    address?: string | null
    officeEmail?: string | null
    officeEmailPassword?: string | null
    status?: string | null
    handphone?: string | null
    startWork?: Date | string
    endWork?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: EmployeeRolesCreateNestedManyWithoutEmployeesInput
    teams?: EmployeeTeamsCreateNestedManyWithoutEmployeesInput
    activities?: EmployeeActivitiesCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesUncheckedCreateWithoutSchoolsInput = {
    id?: number
    name: string
    email: string
    gender?: Gender
    placeOfBirth: string
    dateOfBirth: Date | string
    marriageStatus?: boolean
    photo?: string | null
    address?: string | null
    officeEmail?: string | null
    officeEmailPassword?: string | null
    status?: string | null
    handphone?: string | null
    startWork?: Date | string
    endWork?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: EmployeeRolesUncheckedCreateNestedManyWithoutEmployeesInput
    teams?: EmployeeTeamsUncheckedCreateNestedManyWithoutEmployeesInput
    activities?: EmployeeActivitiesUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesCreateOrConnectWithoutSchoolsInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutSchoolsInput, EmployeesUncheckedCreateWithoutSchoolsInput>
  }

  export type SchoolsCreateWithoutEmployeesInput = {
    name: string
    level?: SchoolLevel
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolsUncheckedCreateWithoutEmployeesInput = {
    id?: number
    name: string
    level?: SchoolLevel
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolsCreateOrConnectWithoutEmployeesInput = {
    where: SchoolsWhereUniqueInput
    create: XOR<SchoolsCreateWithoutEmployeesInput, SchoolsUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeesUpsertWithoutSchoolsInput = {
    update: XOR<EmployeesUpdateWithoutSchoolsInput, EmployeesUncheckedUpdateWithoutSchoolsInput>
    create: XOR<EmployeesCreateWithoutSchoolsInput, EmployeesUncheckedCreateWithoutSchoolsInput>
  }

  export type EmployeesUpdateWithoutSchoolsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    marriageStatus?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmailPassword?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    handphone?: NullableStringFieldUpdateOperationsInput | string | null
    startWork?: DateTimeFieldUpdateOperationsInput | Date | string
    endWork?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: EmployeeRolesUpdateManyWithoutEmployeesInput
    teams?: EmployeeTeamsUpdateManyWithoutEmployeesInput
    activities?: EmployeeActivitiesUpdateManyWithoutEmployeeInput
  }

  export type EmployeesUncheckedUpdateWithoutSchoolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    marriageStatus?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmailPassword?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    handphone?: NullableStringFieldUpdateOperationsInput | string | null
    startWork?: DateTimeFieldUpdateOperationsInput | Date | string
    endWork?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: EmployeeRolesUncheckedUpdateManyWithoutEmployeesInput
    teams?: EmployeeTeamsUncheckedUpdateManyWithoutEmployeesInput
    activities?: EmployeeActivitiesUncheckedUpdateManyWithoutEmployeeInput
  }

  export type SchoolsUpsertWithoutEmployeesInput = {
    update: XOR<SchoolsUpdateWithoutEmployeesInput, SchoolsUncheckedUpdateWithoutEmployeesInput>
    create: XOR<SchoolsCreateWithoutEmployeesInput, SchoolsUncheckedCreateWithoutEmployeesInput>
  }

  export type SchoolsUpdateWithoutEmployeesInput = {
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSchoolLevelFieldUpdateOperationsInput | SchoolLevel
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolsUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSchoolLevelFieldUpdateOperationsInput | SchoolLevel
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeSchoolsCreateWithoutSchoolsInput = {
    graduateYear?: number
    employeess: EmployeesCreateNestedOneWithoutSchoolsInput
  }

  export type EmployeeSchoolsUncheckedCreateWithoutSchoolsInput = {
    id?: number
    graduateYear?: number
    employeeId: number
  }

  export type EmployeeSchoolsCreateOrConnectWithoutSchoolsInput = {
    where: EmployeeSchoolsWhereUniqueInput
    create: XOR<EmployeeSchoolsCreateWithoutSchoolsInput, EmployeeSchoolsUncheckedCreateWithoutSchoolsInput>
  }

  export type EmployeeSchoolsCreateManySchoolsInputEnvelope = {
    data: Enumerable<EmployeeSchoolsCreateManySchoolsInput>
    skipDuplicates?: boolean
  }

  export type EmployeeSchoolsUpsertWithWhereUniqueWithoutSchoolsInput = {
    where: EmployeeSchoolsWhereUniqueInput
    update: XOR<EmployeeSchoolsUpdateWithoutSchoolsInput, EmployeeSchoolsUncheckedUpdateWithoutSchoolsInput>
    create: XOR<EmployeeSchoolsCreateWithoutSchoolsInput, EmployeeSchoolsUncheckedCreateWithoutSchoolsInput>
  }

  export type EmployeeSchoolsUpdateWithWhereUniqueWithoutSchoolsInput = {
    where: EmployeeSchoolsWhereUniqueInput
    data: XOR<EmployeeSchoolsUpdateWithoutSchoolsInput, EmployeeSchoolsUncheckedUpdateWithoutSchoolsInput>
  }

  export type EmployeeSchoolsUpdateManyWithWhereWithoutSchoolsInput = {
    where: EmployeeSchoolsScalarWhereInput
    data: XOR<EmployeeSchoolsUpdateManyMutationInput, EmployeeSchoolsUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type EmployeeTeamsCreateWithoutTeamsInput = {
    code: string
    role?: RolesCreateNestedOneWithoutTeamInput
    employees: EmployeesCreateNestedOneWithoutTeamsInput
  }

  export type EmployeeTeamsUncheckedCreateWithoutTeamsInput = {
    employeeId: number
    code: string
    roleId?: number
    id?: number
  }

  export type EmployeeTeamsCreateOrConnectWithoutTeamsInput = {
    where: EmployeeTeamsWhereUniqueInput
    create: XOR<EmployeeTeamsCreateWithoutTeamsInput, EmployeeTeamsUncheckedCreateWithoutTeamsInput>
  }

  export type EmployeeTeamsCreateManyTeamsInputEnvelope = {
    data: Enumerable<EmployeeTeamsCreateManyTeamsInput>
    skipDuplicates?: boolean
  }

  export type EmployeeTeamsUpsertWithWhereUniqueWithoutTeamsInput = {
    where: EmployeeTeamsWhereUniqueInput
    update: XOR<EmployeeTeamsUpdateWithoutTeamsInput, EmployeeTeamsUncheckedUpdateWithoutTeamsInput>
    create: XOR<EmployeeTeamsCreateWithoutTeamsInput, EmployeeTeamsUncheckedCreateWithoutTeamsInput>
  }

  export type EmployeeTeamsUpdateWithWhereUniqueWithoutTeamsInput = {
    where: EmployeeTeamsWhereUniqueInput
    data: XOR<EmployeeTeamsUpdateWithoutTeamsInput, EmployeeTeamsUncheckedUpdateWithoutTeamsInput>
  }

  export type EmployeeTeamsUpdateManyWithWhereWithoutTeamsInput = {
    where: EmployeeTeamsScalarWhereInput
    data: XOR<EmployeeTeamsUpdateManyMutationInput, EmployeeTeamsUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type EmployeesCreateWithoutRolesInput = {
    name: string
    email: string
    gender?: Gender
    placeOfBirth: string
    dateOfBirth: Date | string
    marriageStatus?: boolean
    photo?: string | null
    address?: string | null
    officeEmail?: string | null
    officeEmailPassword?: string | null
    status?: string | null
    handphone?: string | null
    startWork?: Date | string
    endWork?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: EmployeeSchoolsCreateNestedManyWithoutEmployeessInput
    teams?: EmployeeTeamsCreateNestedManyWithoutEmployeesInput
    activities?: EmployeeActivitiesCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesUncheckedCreateWithoutRolesInput = {
    id?: number
    name: string
    email: string
    gender?: Gender
    placeOfBirth: string
    dateOfBirth: Date | string
    marriageStatus?: boolean
    photo?: string | null
    address?: string | null
    officeEmail?: string | null
    officeEmailPassword?: string | null
    status?: string | null
    handphone?: string | null
    startWork?: Date | string
    endWork?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schools?: EmployeeSchoolsUncheckedCreateNestedManyWithoutEmployeessInput
    teams?: EmployeeTeamsUncheckedCreateNestedManyWithoutEmployeesInput
    activities?: EmployeeActivitiesUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesCreateOrConnectWithoutRolesInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutRolesInput, EmployeesUncheckedCreateWithoutRolesInput>
  }

  export type RolesCreateWithoutEmployeesInput = {
    name: string
    detail?: string
    team?: EmployeeTeamsCreateNestedManyWithoutRoleInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolesUncheckedCreateWithoutEmployeesInput = {
    id?: number
    name: string
    detail?: string
    team?: EmployeeTeamsUncheckedCreateNestedManyWithoutRoleInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolesCreateOrConnectWithoutEmployeesInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutEmployeesInput, RolesUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeesUpsertWithoutRolesInput = {
    update: XOR<EmployeesUpdateWithoutRolesInput, EmployeesUncheckedUpdateWithoutRolesInput>
    create: XOR<EmployeesCreateWithoutRolesInput, EmployeesUncheckedCreateWithoutRolesInput>
  }

  export type EmployeesUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    marriageStatus?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmailPassword?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    handphone?: NullableStringFieldUpdateOperationsInput | string | null
    startWork?: DateTimeFieldUpdateOperationsInput | Date | string
    endWork?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: EmployeeSchoolsUpdateManyWithoutEmployeessInput
    teams?: EmployeeTeamsUpdateManyWithoutEmployeesInput
    activities?: EmployeeActivitiesUpdateManyWithoutEmployeeInput
  }

  export type EmployeesUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    marriageStatus?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    officeEmailPassword?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    handphone?: NullableStringFieldUpdateOperationsInput | string | null
    startWork?: DateTimeFieldUpdateOperationsInput | Date | string
    endWork?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: EmployeeSchoolsUncheckedUpdateManyWithoutEmployeessInput
    teams?: EmployeeTeamsUncheckedUpdateManyWithoutEmployeesInput
    activities?: EmployeeActivitiesUncheckedUpdateManyWithoutEmployeeInput
  }

  export type RolesUpsertWithoutEmployeesInput = {
    update: XOR<RolesUpdateWithoutEmployeesInput, RolesUncheckedUpdateWithoutEmployeesInput>
    create: XOR<RolesCreateWithoutEmployeesInput, RolesUncheckedCreateWithoutEmployeesInput>
  }

  export type RolesUpdateWithoutEmployeesInput = {
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    team?: EmployeeTeamsUpdateManyWithoutRoleInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    team?: EmployeeTeamsUncheckedUpdateManyWithoutRoleInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeRolesCreateWithoutRolesInput = {
    employees: EmployeesCreateNestedOneWithoutRolesInput
  }

  export type EmployeeRolesUncheckedCreateWithoutRolesInput = {
    id?: number
    employeeId: number
  }

  export type EmployeeRolesCreateOrConnectWithoutRolesInput = {
    where: EmployeeRolesWhereUniqueInput
    create: XOR<EmployeeRolesCreateWithoutRolesInput, EmployeeRolesUncheckedCreateWithoutRolesInput>
  }

  export type EmployeeRolesCreateManyRolesInputEnvelope = {
    data: Enumerable<EmployeeRolesCreateManyRolesInput>
    skipDuplicates?: boolean
  }

  export type EmployeeTeamsCreateWithoutRoleInput = {
    code: string
    employees: EmployeesCreateNestedOneWithoutTeamsInput
    teams: TeamsCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeTeamsUncheckedCreateWithoutRoleInput = {
    employeeId: number
    teamId: number
    code: string
    id?: number
  }

  export type EmployeeTeamsCreateOrConnectWithoutRoleInput = {
    where: EmployeeTeamsWhereUniqueInput
    create: XOR<EmployeeTeamsCreateWithoutRoleInput, EmployeeTeamsUncheckedCreateWithoutRoleInput>
  }

  export type EmployeeTeamsCreateManyRoleInputEnvelope = {
    data: Enumerable<EmployeeTeamsCreateManyRoleInput>
    skipDuplicates?: boolean
  }

  export type EmployeeRolesUpsertWithWhereUniqueWithoutRolesInput = {
    where: EmployeeRolesWhereUniqueInput
    update: XOR<EmployeeRolesUpdateWithoutRolesInput, EmployeeRolesUncheckedUpdateWithoutRolesInput>
    create: XOR<EmployeeRolesCreateWithoutRolesInput, EmployeeRolesUncheckedCreateWithoutRolesInput>
  }

  export type EmployeeRolesUpdateWithWhereUniqueWithoutRolesInput = {
    where: EmployeeRolesWhereUniqueInput
    data: XOR<EmployeeRolesUpdateWithoutRolesInput, EmployeeRolesUncheckedUpdateWithoutRolesInput>
  }

  export type EmployeeRolesUpdateManyWithWhereWithoutRolesInput = {
    where: EmployeeRolesScalarWhereInput
    data: XOR<EmployeeRolesUpdateManyMutationInput, EmployeeRolesUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type EmployeeTeamsUpsertWithWhereUniqueWithoutRoleInput = {
    where: EmployeeTeamsWhereUniqueInput
    update: XOR<EmployeeTeamsUpdateWithoutRoleInput, EmployeeTeamsUncheckedUpdateWithoutRoleInput>
    create: XOR<EmployeeTeamsCreateWithoutRoleInput, EmployeeTeamsUncheckedCreateWithoutRoleInput>
  }

  export type EmployeeTeamsUpdateWithWhereUniqueWithoutRoleInput = {
    where: EmployeeTeamsWhereUniqueInput
    data: XOR<EmployeeTeamsUpdateWithoutRoleInput, EmployeeTeamsUncheckedUpdateWithoutRoleInput>
  }

  export type EmployeeTeamsUpdateManyWithWhereWithoutRoleInput = {
    where: EmployeeTeamsScalarWhereInput
    data: XOR<EmployeeTeamsUpdateManyMutationInput, EmployeeTeamsUncheckedUpdateManyWithoutTeamInput>
  }

  export type EmployeeActivitiesCreateManyActivityInput = {
    id?: number
    employeeId: number
  }

  export type EmployeeActivitiesUpdateWithoutActivityInput = {
    employee?: EmployeesUpdateOneRequiredWithoutActivitiesInput
  }

  export type EmployeeActivitiesUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeActivitiesUncheckedUpdateManyWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeSchoolsCreateManyEmployeessInput = {
    id?: number
    graduateYear?: number
    schoolId: number
  }

  export type EmployeeRolesCreateManyEmployeesInput = {
    id?: number
    roleId: number
  }

  export type EmployeeTeamsCreateManyEmployeesInput = {
    teamId: number
    code: string
    roleId?: number
    id?: number
  }

  export type EmployeeActivitiesCreateManyEmployeeInput = {
    id?: number
    activityId: number
  }

  export type EmployeeSchoolsUpdateWithoutEmployeessInput = {
    graduateYear?: IntFieldUpdateOperationsInput | number
    schools?: SchoolsUpdateOneRequiredWithoutEmployeesInput
  }

  export type EmployeeSchoolsUncheckedUpdateWithoutEmployeessInput = {
    id?: IntFieldUpdateOperationsInput | number
    graduateYear?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeRolesUpdateWithoutEmployeesInput = {
    roles?: RolesUpdateOneRequiredWithoutEmployeesInput
  }

  export type EmployeeRolesUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeTeamsUpdateWithoutEmployeesInput = {
    code?: StringFieldUpdateOperationsInput | string
    role?: RolesUpdateOneRequiredWithoutTeamInput
    teams?: TeamsUpdateOneRequiredWithoutEmployeesInput
  }

  export type EmployeeTeamsUncheckedUpdateWithoutEmployeesInput = {
    teamId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeActivitiesUpdateWithoutEmployeeInput = {
    activity?: ActivitiesUpdateOneRequiredWithoutEmployeesInput
  }

  export type EmployeeActivitiesUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeActivitiesUncheckedUpdateManyWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeSchoolsCreateManySchoolsInput = {
    id?: number
    graduateYear?: number
    employeeId: number
  }

  export type EmployeeSchoolsUpdateWithoutSchoolsInput = {
    graduateYear?: IntFieldUpdateOperationsInput | number
    employeess?: EmployeesUpdateOneRequiredWithoutSchoolsInput
  }

  export type EmployeeSchoolsUncheckedUpdateWithoutSchoolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    graduateYear?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeSchoolsUncheckedUpdateManyWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    graduateYear?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeTeamsCreateManyTeamsInput = {
    employeeId: number
    code: string
    roleId?: number
    id?: number
  }

  export type EmployeeTeamsUpdateWithoutTeamsInput = {
    code?: StringFieldUpdateOperationsInput | string
    role?: RolesUpdateOneRequiredWithoutTeamInput
    employees?: EmployeesUpdateOneRequiredWithoutTeamsInput
  }

  export type EmployeeTeamsUncheckedUpdateWithoutTeamsInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeRolesCreateManyRolesInput = {
    id?: number
    employeeId: number
  }

  export type EmployeeTeamsCreateManyRoleInput = {
    employeeId: number
    teamId: number
    code: string
    id?: number
  }

  export type EmployeeRolesUpdateWithoutRolesInput = {
    employees?: EmployeesUpdateOneRequiredWithoutRolesInput
  }

  export type EmployeeRolesUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeTeamsUpdateWithoutRoleInput = {
    code?: StringFieldUpdateOperationsInput | string
    employees?: EmployeesUpdateOneRequiredWithoutTeamsInput
    teams?: TeamsUpdateOneRequiredWithoutEmployeesInput
  }

  export type EmployeeTeamsUncheckedUpdateWithoutRoleInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeTeamsUncheckedUpdateManyWithoutTeamInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
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
  export const dmmf: runtime.DMMF.Document;
}