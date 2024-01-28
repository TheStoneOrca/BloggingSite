-- CreateTable
CREATE TABLE "users" (
    "userid" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "profile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "Posts" (
    "postid" SERIAL NOT NULL,
    "postitle" TEXT NOT NULL,
    "postauthor" TEXT NOT NULL,
    "postcontent" JSONB[],
    "createdWhen" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("postid")
);
