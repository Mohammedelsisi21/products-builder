import './TemplateName.scss'

interface IProps {
    title: string
}

const TemplateName = ({title = "TemplateName"} : IProps) => {
    return (<>
        <h1 className='text-center'>{title}</h1>
    </>)
}

export default TemplateName