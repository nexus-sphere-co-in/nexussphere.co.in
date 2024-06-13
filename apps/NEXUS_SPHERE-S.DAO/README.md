# S.DAO Page in Svelte

## Generating Typechain Factories
1. Go into `src/lib/abis` and run `pnpx typechain --target=ethers-v6 --out-dir v6 '**/*.json'`.
   (JSH: Note, this will be turned into a package.json script later).
2. Generated factories will be importable with `$factory/NexusDAO__factory` as an example.



Read the [TypeChain](https://github.com/dethcrypto/TypeChain) documentation for more information.