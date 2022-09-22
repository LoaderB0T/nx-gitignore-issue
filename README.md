# GitignoreIssue

## Repro steps

1. run `npm install`
2. run `npm run prepare`
3. run `nx build gitignore`

## Expected behavior

No build errors

## Actual behavior

Build error:

```
libs/lib-a/src/lib/service.ts:1:1 - error TS6059: File 'D:/git/gitignore-issue/libs/lib-a/src/lib/service.ngtypecheck.ts' is not under 'rootDir' 'D:\git\gitignore-issue\libs\lib-b\src'. 'rootDir' is expected to contain all source files.

1 import { Injectable } from '@angular/core';
 
libs/lib-a/src/index.ts:1:1 - error TS6059: File 'D:/git/gitignore-issue/libs/lib-a/src/index.ngtypecheck.ts' is not under 'rootDir' 'D:\git\gitignore-issue\libs\lib-b\src'. 'rootDir' is expected to contain all source files.

1 export * from './lib/service';
 
libs/lib-a/src/index.ts:1:15 - error TS6059: File 'D:/git/gitignore-issue/libs/lib-a/src/lib/service.ts' is not under 'rootDir' 'D:\git\gitignore-issue\libs\lib-b\src'. 'rootDir' is expected to contain all source files.

1 export * from './lib/service';
                ~~~~~~~~~~~~~~~
libs/lib-b/src/lib/.api/ignoredFile/service.ts:3:29 - error TS6059: File 'D:/git/gitignore-issue/libs/lib-a/src/index.ts' is not under 'rootDir' 'D:\git\gitignore-issue\libs\lib-b\src'. 'rootDir' is expected to contain all source files.

3 import { LibAService } from '@gitignore-issue/lib-a';
                              ~~~~~~~~~~~~~~~~~~~~~~~~


 —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— 

 >  NX   Ran target build for project gitignore and 1 task(s) it depends on (3s)

    ×    1/1 failed
    √    0/1 succeeded [0 read from cache]
```

## Validate that it is because of the gitignore

1. Delete the .gitignore file `libs/lib-b/src/lib/.api/.gitignore`
2. Run `nx build gitignore` again -> build succeeds
