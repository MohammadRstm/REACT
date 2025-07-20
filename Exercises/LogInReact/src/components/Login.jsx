import './componentsCSS/Login.css'



export function LogInForm(){
        return (
            <div className="form-container">
                <form className='login-form' method = "post">
                    <div className="input-container">
                        <label
                        className='input-label'
                        htmlFor="username"
                        >User Name 
                        </label>
                        <input
                        className='input-user-text'
                        id ="username"
                        type="text"
                        placeholder="Enter your username"
                        />
                    </div>
                    <div className="input-container">
                        <label
                        className='input-label'
                        htmlFor="password"
                        >Password 
                        </label>
                        <input
                        className='input-password-text'
                        id ="password"
                        type="password"
                        placeholder="Enter your password"
                        />
                    </div>
                    <div className="submit-container">
                        <input
                        className="submit-button"
                        type="submit"
                        value="Submit form"
                        />
                    </div>
                </form>
            </div>
        )
}