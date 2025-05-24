import { DifficultyOption } from "gameplay/Difficulty"

export function SidebarArea (display) {
    return (
        <aside className={`${display.display === 'START' ? 'sidebar': 'sidebar-off'}`} >
            <h1>Reaction Time Testing</h1>
            <details>
                <summary>Difficulty</summary>
                <DifficultyOption />
            </details>
        </aside>
    )
}
