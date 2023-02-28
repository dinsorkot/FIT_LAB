<template>
    <div class="container  mt-5 btnclick">
        <div class="d-flex align-items-center h-100 ms-5">
            <div class="card d-flex align-items-center justify-content-center"
                style="background-color: #121212;width:150px; height:150px; border-radius: 25px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                    class="bi bi-envelope text-light" viewBox="0 0 16 16">
                    <path
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
            </div>
            <div class=" ms-5">
                <h2 class="text-light"> Change Email </h2>
                <h6 style="color:#898989;">before email</h6>
            </div>
        </div>
    </div>
    <div class="container mt-5 btnclick">
        <div class="d-flex align-items-center h-100 ms-5">
            <div class="card d-flex align-items-center justify-content-center"
                style="background-color: #121212;width:150px; height:150px; border-radius: 25px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                    class="bi bi-lock text-light" viewBox="0 0 16 16">
                    <path
                        d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
            </div>
            <div class=" ms-5">
                <h2 class="text-light"> Change password </h2>
                <h6 style="color:#898989;">before length password</h6>
            </div>
        </div>
    </div>
    <div class="position-relative me-5" style="height: 200px;">
        <div>
            <a class=" position-absolute  d-flex align-items-center justify-content-center signout" >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    class="bi bi-box-arrow-right text-light" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                    <path fill-rule="evenodd"
                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                </svg>
            </a>
        </div>
    </div>
</template>
<style scoped>
.btnclick {
    background-color: #1E1E1E;
    height: 200px;
    border-radius: 25px;
    transition: 0.5s;
}

.btnclick:hover {
    box-shadow: rgba(255, 255, 255, 0.15) 0px 2px 8px;
    transition: 0.5s;
}

.signout {
    right: 10px;
    bottom: 100px;
    background-color: #1E1E1E;
    border-radius: 25px;
    width: 100px;
    height: 60px;
    transition: 0.5s;
}
.signout:hover {
    border-radius: 25px;
    width: 110px;
    height: 70px;
    transition: 0.5s;
}
</style>