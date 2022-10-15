function UserRegister() {
  return (
    <form>
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" class="form-control" id="fname" />
      </div>
      <div class="form-group">
        <label for="name">Email address</label>
        <input type="text" class="form-control" id="femail" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="fpass" />
      </div>

      <button type="submit" class="btn btn-primary">
        Register
      </button>
    </form>
  );
}

export default UserRegister;
