-- CreateTable
CREATE TABLE "post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
