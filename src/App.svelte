<script lang="ts">
    import Options from "./lib/Options.svelte";
    let pokemon;
    function cap(str: string): string {
        let cap = str.charAt(0).toUpperCase() + str.slice(1);
        return cap;
    }
</script>

<main>
    <div class="card svelte">
        <Options on:pokeObj={(e) => (pokemon = e.detail.pokeObj)} />
    </div>
    {#if pokemon === "fail"}
        <p class="card">
            🤔 I think that pokemon doesn't exist... Try again! 🤓
        </p>
    {:else if pokemon}
        <h2>
            {pokemon.id} _ {cap(pokemon.name)}
        </h2>
        <div>
            {#each pokemon["sprites"] as p}
                <a href={p} target="_blank" rel="noreferrer">
                    <img src={p} class="logo" alt={pokemon.name} />
                </a>
            {/each}
        </div>
        <table class="customTable">
            <tbody>
                <tr>
                    <td
                        ><strong>Id:</strong>
                        {pokemon.id}</td
                    >
                    <td
                        ><strong>Name:</strong>
                        {cap(pokemon.name)}</td
                    >
                    <td
                        ><strong>Type:</strong>
                        {#each pokemon.type as t}
                            {`${cap(t)}. `}
                        {/each}
                    </td>
                </tr>
                <tr>
                    <td
                        ><strong>Height:</strong>
                        {pokemon.height / 10} m.
                    </td>
                    <td
                        ><strong>Weight:</strong>
                        {pokemon.weight / 10} kg.
                    </td>
                    <td
                        ><strong>Abilities:</strong>
                        {#each pokemon.abilities as a}
                            {`${cap(a)}. `}
                        {/each}
                    </td>
                </tr>
            </tbody>
        </table>
    {:else}
        <div class="slide-top">👆</div>
        <kbd>
            Type the name or id of some pokemon and you will see its data and
            some cool images.
        </kbd>
    {/if}

    <footer class="read-the-docs">
        <em>
            - Site made by <a
                href="https://github.com/GiampieroFC"
                target="_blank"
                rel="noopener noreferrer">Giampiero</a
            >
            with ❤ and <code class="svelteFont">Svelte</code> -
        </em>
    </footer>
</main>

<style>
    .logo {
        width: 12em;
        padding: 1.5em;
        will-change: filter;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .svelteFont {
        color: #ff3e00aa;
    }
    h2:hover,
    td:hover,
    .svelte:hover {
        filter: drop-shadow(0 0 2em #ff3e00aa);
    }
    .read-the-docs {
        color: #888;
    }
    .customTable {
        width: 100%;
        border-width: 1px;
        border-color: #646cffaa;
        border-style: solid;
        border-radius: 2em;
        padding-left: 1em;
        padding-right: 1em;
    }
    footer {
        bottom: 0;
        margin-top: 3em;
    }
    .slide-top {
        -webkit-animation: slide-top 600ms ease-in infinite alternate-reverse
            both;
        animation: slide-top 600ms ease-in infinite alternate-reverse both;
    }

    @-webkit-keyframes slide-top {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-25px);
            transform: translateY(-25px);
        }
    }
    @keyframes slide-top {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-25px);
            transform: translateY(-25px);
        }
    }
</style>
