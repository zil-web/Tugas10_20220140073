function showProdi() {
    var fakultas = document.getElementById("fakultas").value;
    var prodiSection = document.getElementById("prodi_section");
    var prodi = document.getElementById("prodi");
    var bahasaPemrogramanSection = document.getElementById("bahasa_pemrograman_section");
    var webCheckbox = document.getElementsByName("web")[0];
    var mobileCheckbox = document.getElementsByName("mobile")[0];
    var deskCheckbox = document.getElementsByName("desk")[0];

    if (fakultas === "") {
        prodiSection.style.display = "none";
        prodi.innerHTML = "<option value=''>Pilih Prodi</option>";
        bahasaPemrogramanSection.style.display = "none"; // Hide bahasa pemrograman section if fakultas is not selected
    } else {
        prodiSection.style.display = "block";
        // Reset the prodi options
        prodi.innerHTML = "<option value=''>Pilih Prodi</option>";

        // Add prodi options based on selected fakultas
        switch (fakultas) {
            case "fakultas1":
                prodi.innerHTML += "<option value='Akuntansi'>Akuntansi</option>";
                prodi.innerHTML += "<option value='IPAcc'>IPAcc</option>";
                prodi.innerHTML += "<option value='Manajemen'>Manajemen</option>";
                prodi.innerHTML += "<option value='IMABS'>IMABS</option>";
                prodi.innerHTML += "<option value='Ekonomi'>Ekonomi</option>";
                prodi.innerHTML += "<option value='IPIBF'>IPIBF</option>";
                break;
            case "fakultas2":
                prodi.innerHTML += "<option value='Ilmu Hubungan Internasional'>Ilmu Hubungan Internasional</option>";
                prodi.innerHTML += "<option value='Ilmu Komunikasi'>Ilmu Komunikasi</option>";
                prodi.innerHTML += "<option value='Ilmu Pemerintah'>Ilmu Pemerintah</option>";
                break;
            case "fakultas3":
                prodi.innerHTML += "<option value='Pend. Bahasa Inggris'>Pend. Bahasa Inggris</option>";
                prodi.innerHTML += "<option value='Pend. Bahasa Arab'>Pend. Bahasa Arab</option>";
                prodi.innerHTML += "<option value='Pend. Bahasa Jepang'>Pend. Bahasa Jepang</option>";
                break;
            case "fakultas4":
                prodi.innerHTML += "<option value='Agama Islam'>Agama Islam</option>";
                break;
            case "fakultas5":
                prodi.innerHTML += "<option value='Hukum'>Hukum</option>";
                break;
            case "fakultas6":
                prodi.innerHTML += "<option value='Argoteknologi'>Argoteknologi</option>";
                prodi.innerHTML += "<option value='Argibisnis'>Argibisnis</option>";
                break;
            case "fakultas7":
                prodi.innerHTML += "<option value='Kedokteran'>Kedokteran</option>";
                prodi.innerHTML += "<option value='Kedokteran Gigi'>Kedokteran Gigi</option>";
                prodi.innerHTML += "<option value='Ilmu Keperawatan'>Ilmu Keperawatan</option>";
                prodi.innerHTML += "<option value='Farmasi'>Farmasi</option>";
                prodi.innerHTML += "<option value='Profesi Dokter'>Profesi Dokter</option>";
                prodi.innerHTML += "<option value='Profesi Dokter Gigi'>Profesi Dokter Gigi</option>";
                prodi.innerHTML += "<option value='Profesi Ners'>Profesi Ners</option>";
                prodi.innerHTML += "<option value='Profesi Apoteker'>Profesi Apoteker</option>";
                break;
            case "fakultas8":
                prodi.innerHTML += "<option value='Teknik Sipil'>Teknik Sipil</option>";
                prodi.innerHTML += "<option value='Teknik Mesin'>Teknik Mesin</option>";
                prodi.innerHTML += "<option value='Teknik Elektro'>Teknik Elektro</option>";
                prodi.innerHTML += "<option value='Teknologi Informasi'>Teknologi Informasi</option>";
                prodi.addEventListener("change", function() {
                    if (prodi.value === "Teknologi Informasi") {
                        bahasaPemrogramanSection.style.display = "block"; // Show bahasa pemrograman section if prodi is "Teknologi Informasi"
                    } else {
                        bahasaPemrogramanSection.style.display = "none"; // Hide bahasa pemrograman section if prodi is not "Teknologi Informasi"
                    }
                });
                break;
            default:
                prodi.innerHTML = "<option value=''>Pilih Prodi</option>";
                break;
        }
    }
}

