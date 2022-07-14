-- CreateTable
CREATE TABLE "Activities" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "venue" TEXT DEFAULT E'',
    "status" TEXT DEFAULT E'ongoing',
    "startDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "detail" TEXT DEFAULT E'',
    "photo" TEXT DEFAULT E'',

    CONSTRAINT "Activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeActivities" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,

    CONSTRAINT "EmployeeActivities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EmployeeActivities" ADD CONSTRAINT "EmployeeActivities_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeActivities" ADD CONSTRAINT "EmployeeActivities_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
