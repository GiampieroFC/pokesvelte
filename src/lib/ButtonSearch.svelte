<script lang="ts">
    export let id;
    import { createEventDispatcher } from "svelte";
    import { fetching } from "../ts/pokemon";
    let pokeObj;
    let dispatch = createEventDispatcher();

    async function fetchAndDispatch() {
        pokeObj = await fetching(id);
        dispatch("pokeObj", { pokeObj: pokeObj });
    }
</script>

<button on:click|preventDefault={fetchAndDispatch}>Search! </button>
