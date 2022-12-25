<script lang="ts">
    import { options } from "../ts/options";
    import { fetching } from "../ts/pokemon";
    import Button from "./ButtonSearch.svelte";
    let choice: string;
    import { createEventDispatcher } from "svelte";
    let pokeObj;
    let dispatch = createEventDispatcher();

    async function fetchAndDispatch(e) {
        if (e.code === "Enter" || e.keyCode === 13) {
            pokeObj = await fetching(choice);
            dispatch("pokeObj", { pokeObj: pokeObj });
        }
    }
</script>

<label for="pokemon-choice">Choose your pokemon: </label>
<input
    on:keydown={(e) => fetchAndDispatch(e)}
    bind:value={choice}
    list="pokemon-species"
    id="pokemon-choice"
    name="pokemon-choice"
/>

<datalist id="pokemon-species">
    {#each options as { id, name }}
        <option value={id} />
        <option value={name} />
    {/each}
</datalist>

<Button id={choice} on:pokeObj />
