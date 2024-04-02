# module.filename is undefined in vitest but not in jest

https://github.com/vitest-dev/vitest/issues/5469

### Describe the bug

The `module.filename` is undefined in `vitest` but not in `jest`.

`npm start` and `npm test` (will both execute `vitest` and `jest`)

### Reproduction

## Vitest

![image](https://github.com/vitest-dev/vitest/assets/8446145/877782c6-f17f-4369-a43d-fe50a931d751)

## Jest

![image](https://github.com/vitest-dev/vitest/assets/8446145/3789c561-b577-4618-9397-6b7363f09edb)

### System Info

```shell
System:
    OS: Windows 10 10.0.19045
    CPU: (8) x64 Intel(R) Core(TM) i5-8365U CPU @ 1.60GHz
    Memory: 653.65 MB / 7.81 GB
  Binaries:
    Node: 20.11.0 - C:\Program Files\nodejs\node.EXE    npm: 10.3.0 - C:\Program Files\nodejs\npm.CMD
  Browsers:
    Chrome: 123.0.6312.86
    Edge: Chromium (122.0.2365.92)
    Internet Explorer: 11.0.19041.3636
```

```


### Used Package Manager

npm

### Validations

- [X] Follow our [Code of Conduct](https://github.com/vitest-dev/vitest/blob/main/CODE_OF_CONDUCT.md)
- [X] Read the [Contributing Guidelines](https://github.com/vitest-dev/vitest/blob/main/CONTRIBUTING.md).
- [X] Read the [docs](https://vitest.dev/guide/).
- [X] Check that there isn't [already an issue](https://github.com/vitest-dev/vitest/issues) that reports the same bug to avoid creating a duplicate.
- [X] Check that this is a concrete bug. For Q&A open a [GitHub Discussion](https://github.com/vitest-dev/vitest/discussions) or join our [Discord Chat Server](https://chat.vitest.dev).
- [X] The provided reproduction is a [minimal reproducible example](https://stackoverflow.com/help/minimal-reproducible-example) of the bug.
```
