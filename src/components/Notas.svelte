<script>
    import {encrypt_data, decrypt_data, clear_str} from '../components/utils'
    import data from './info.json'
    let input = ""
    let success = {tries: 0, status: false};
    let info = {} 
    let end = ""
    let finfinalestesi = []

    const handleSubmit =()=>{
       if(success.status = true) success.status = false
       let encInput = encrypt_data(input.trim().toLocaleLowerCase())
       let res = data.filter((element)=> element.Column1 == encInput )
       console.log(res)
        if(res.length == 0){
            success.tries +=1
        }
        else{
            success.status = true
            info = res[0]
            end= JSON.stringify(info)
            let p = end.split(",")
            p.shift()
            end =JSON.stringify(p)
            end = clear_str(end)
            finfinalestesi = [...end.split(",")]
        }
        
    }
</script>

<section >
    <form on:submit|preventDefault={handleSubmit}>
        <p><strong>Ingresa tu correo institucional para consultar tus notas</strong></p>
        <div>
            <input bind:value={input} type="text">
            <button type="submit">Buscar</button>
        </div>
        {#if !success.status && success.tries > 0}
        <div>
            <span class="err">El correo no existe</span>
        </div>
        {:else if !success.status }
            <span></span>
        {:else}
            <div class="notas">
                <span class="t">{decrypt_data(info.Column1)}</span>
                <p>
                    {#each finfinalestesi as tarea }
                        <p>{tarea}</p>
                    {/each}
                </p>
            </div>
        {/if}
        
    </form>
</section>
<style>
    .err{
        background-color: rgb(216, 117, 117, 60%);
        text-align: center;
        padding: .3rem 1rem;
        margin: 1rem;
        border-radius: 10px;
    }
    section{
        display: flex;
        justify-content: center;
        padding: 1rem;
    }
    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    button{
        width: fit-content;
        margin: auto;
        padding: .5rem 1rem;
    }
    input{
        padding: .5rem 1rem;
    }
    .notas{
        
        padding: 1rem;
        display: flex;
    }
    .t{

        text-align: center;
        font-weight: bold;
        color: rgb( 96, 115, 159)
    }
</style>