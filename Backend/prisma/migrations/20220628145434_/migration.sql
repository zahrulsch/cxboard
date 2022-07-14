/*
  Warnings:

  - You are about to drop the column `roleName` on the `EmployeeTeams` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EmployeeTeams" DROP COLUMN "roleName",
ADD COLUMN     "roleId" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "EmployeeTeams" ADD CONSTRAINT "EmployeeTeams_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
