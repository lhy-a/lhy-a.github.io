---
title: command
icon:  file
---
## 多集群管理 ~/.kube/config

1. 切换到指定的集群

    ```bash
    kubectl config use-context <context>
    ```

2. 如何查看当前使用的集群是哪个？

    ```bash
    kubectl config current-context
    ```

3. 列出所有集群

   ```bash
   kubectl config get-contexts
   ```

4. 合并两个k8s集群的配置

    ```bash
    export KUBECONFIG=/path/to/first/kubeconfig:/path/to/second/kubeconfig
    ```
