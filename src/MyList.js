function MyList() {

    const projects = [
        {
            title: "Inventory Expansion",
            priority: "P0",
        },
        {
            title: "Inventory Principle",
            priority: "P0"
        }
    ];

    return <>{projects.map(project => <span><b>[{project.priority}]</b> {project.title}</span>)}</>
}

export default MyList;