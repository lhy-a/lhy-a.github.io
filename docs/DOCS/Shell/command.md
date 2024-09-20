---
title: command
icon:  file
---
## Set input style

::: tabs
@tab vim

```shell
set -o vi
```

@tab emacs

```shell
set -o emacs
```

:::

## Change User Group

```shell
sudo chown -R $USER:$GROUP .
```

::: note
 -R: Recursively change the owner and group of all files in the current directory.
:::

## Change Permissions

a directory must have execute permission to list its contents.

::: tabs
@tab use numbers

```shell
chmod 755 file
```

::: note

- 7: rwx
- 6: rw
- 5: rx
- 4: r
- 3: wx
- 2: w
- 1: x
- 0: None

@tab use symbols

```shell
chmod u+x file
```

::: note

- u: User
- g: Group
- o: Others
- a: All
- +: Add
- -: Remove
- x: Execute
- r: Read
- w: Write
:::
