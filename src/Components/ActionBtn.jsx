import './Styles/btn_hoverFX.css'

export default function ActionBTN({isLight = false, content = 'Nothing', btnWidth=100, btnHeight = 33, isSubmit = false}){
    
    return (
       <button type={isSubmit ? 'submit': 'button'} title={content} style={{width:`${btnWidth}px`, height: `${btnHeight}px`}} className={isLight? 'light' : 'primary'}>
            <div className='content btn-div' >{content}</div>
            <div className='btn-div'>
                <i className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"/></svg>
                </i>
            </div>
        </button>
    )
}