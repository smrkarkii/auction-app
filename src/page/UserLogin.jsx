function UserLogin() {
  return (
    <form>
      <div class="form-group">
        <label for="femail">Email address</label>
        <input type="text" class="form-control" id="femail" />
      </div>
      <div class="form-group">
        <label for="fpass">Password</label>
        <input type="password" class="form-control" id="fpass" />
      </div>

      <button type="submit" class="btn btn-primary">
        Login
      </button>
    </form>
  );
}

export default UserLogin;
