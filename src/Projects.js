import React from 'react'

function Projects({ forms }) {
    return (

        <div class="col-lg-6 mb-4">
            <div class={`card bg-${forms.form} text-${forms.text} shadow`}>
                <div class="card-body">
                    {forms.name}
                    <div class={`text-${forms.text}-50 small`}>{forms.code}</div>
                </div>
            </div>
        </div>
    )
}

export default Projects