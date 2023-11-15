const getSongs = async () => {
    const songs = await fetch('http://localhost:3000/songs');
    const results = await songs.json()

    const tableBody = document.getElementById('tableBody');

    const canciones = results.map(song => {
        return `<tr>
             <th scope="row">${song.id}</th>
             <td>${song.name}</td>
             <td>${song.Autor}</td>
             <td>${song.album}</td>
             <td>${song.category}</td>
             <td>${song.featured}</td>
             <td><button onclick=deleteSong(${song.id})>Eliminar</button></td>
             <td><button onclick=upgradeSong()>Editar</button></td>
         </tr>
         `
     });

     tableBody.innerHTML = canciones.join('');
};

getSongs();


const deleteSong = (id) => {
    fetch(`http://localhost:3000/songs/${id}`,{
        method: 'DELETE'
    });
}