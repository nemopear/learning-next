const todo = ({todo}) => {
    return (
            <h1>{todo.title}</h1>
        
    );
}

export default todo;

export async function getStaticPaths() {
    const req = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await req.json();
    const paths = todos.map(todo=>{
        return {
            params: {id:todo.id.toString()}
        }
    })
    console.log(paths);
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const req = await fetch('https://jsonplaceholder.typicode.com/todos/' + id);
    const todo = await req.json();
    console.log(todo);

    return {
        props: {todo}
    }
}