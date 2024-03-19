const Contact= () => {

    return(
        <section className="Contact" id="contactId">
            <h2>Contact Me</h2>
            <p>Email: giovanni.mathuirin7@gmail.com</p>

            <form>
            <div className="form-group">
    <label for="InputName">Name</label>
    <input type="text" class="form-control"  placeholder="Enter name"/>
  </div>
  
  <div className="form-group">
    <label for="InputEmail">Email address</label>
    <input type="email" class="form-control"  placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">I'll never share your email with anyone else. Promise</small>
  </div>
  <div className="form-group">
    <label for="InputMessage">Message</label>
    <input type="text" class="form-control"  placeholder="Message"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </section>
    )

}


export default Contact