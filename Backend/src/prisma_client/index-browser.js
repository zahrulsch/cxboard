
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.2
 * Query Engine version: da41d2bb3406da22087b849f0e911199ba4fbf11
 */
Prisma.prismaVersion = {
  client: "3.15.2",
  engine: "da41d2bb3406da22087b849f0e911199ba4fbf11"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  username: 'username',
  email: 'email',
  password: 'password',
  picture: 'picture',
  centerSheetId: 'centerSheetId',
  googleCredential: 'googleCredential'
});

exports.Prisma.ActivitiesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  venue: 'venue',
  status: 'status',
  startDate: 'startDate',
  endDate: 'endDate',
  detail: 'detail',
  photo: 'photo'
});

exports.Prisma.EmployeeActivitiesScalarFieldEnum = makeEnum({
  id: 'id',
  employeeId: 'employeeId',
  activityId: 'activityId'
});

exports.Prisma.EmployeesScalarFieldEnum = makeEnum({
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
});

exports.Prisma.EmployeeTeamsScalarFieldEnum = makeEnum({
  employeeId: 'employeeId',
  teamId: 'teamId',
  code: 'code',
  roleId: 'roleId',
  id: 'id'
});

exports.Prisma.EmployeeSchoolsScalarFieldEnum = makeEnum({
  id: 'id',
  graduateYear: 'graduateYear',
  employeeId: 'employeeId',
  schoolId: 'schoolId'
});

exports.Prisma.SchoolsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  level: 'level',
  address: 'address',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TeamsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  code: 'code',
  address: 'address',
  image: 'image'
});

exports.Prisma.EmployeeRolesScalarFieldEnum = makeEnum({
  id: 'id',
  employeeId: 'employeeId',
  roleId: 'roleId'
});

exports.Prisma.RolesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  detail: 'detail',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.Gender = makeEnum({
  MALE: 'MALE',
  FEMALE: 'FEMALE'
});

exports.SchoolLevel = makeEnum({
  tk: 'tk',
  sd: 'sd',
  smp: 'smp',
  sma: 'sma',
  ptn: 'ptn',
  pts: 'pts'
});

exports.Prisma.ModelName = makeEnum({
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
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
