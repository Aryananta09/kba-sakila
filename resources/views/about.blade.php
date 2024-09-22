<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tentang Sakila</title>
    <link rel="stylesheet" href="{{ asset('adminkba/assets/css/about.css')}}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <x-layout></x-layout>
    <section class="about-us">
        <div class="container">
            <h1>Tentang <span>Database Sakila</span></h1>
            <div class="intro-card">
                <p class="intro">Database Sakila adalah contoh database yang dikembangkan secara khusus oleh MySQL untuk menyediakan dataset yang realistis guna mendemonstrasikan kemampuan MySQL dalam mengelola data bisnis dunia nyata. Awalnya diperkenalkan oleh MySQL AB, Sakila meniru skenario bisnis penyewaan DVD, dan kini dikelola oleh Oracle Corporation.</p>
                <p>Sakila bukan hanya sekadar database sederhana, tetapi merupakan representasi bisnis penyewaan DVD lengkap yang melibatkan banyak entitas seperti film, aktor, pelanggan, penyewaan, pembayaran, dan staf. Dengan desain yang realistis, database ini dirancang untuk mengakomodasi berbagai kebutuhan, mulai dari pembelajaran query SQL dasar hingga pemodelan data yang lebih kompleks. Sakila memberikan simulasi yang akurat tentang bagaimana perusahaan penyewaan DVD beroperasi, sehingga sangat ideal untuk pelatihan dan pengembangan keterampilan SQL.</p>
                <p>Sakila juga menjadi alat yang sering digunakan oleh pengajar dan pengembang untuk mempelajari teknik optimasi database, implementasi join, subquery, dan pengelolaan data relational. Selain itu, database ini dilengkapi dengan contoh-contoh kueri SQL yang dapat membantu pengguna memahami dan mengeksplorasi berbagai skenario bisnis yang realistis.</p>
            </div>

            <div class="features-grid">
                <div class="feature-card">
                    <h2>Skema Lengkap</h2>
                    <p>Sakila menawarkan skema database lengkap dengan tabel-tabel seperti film, aktor, kategori, pelanggan, penyewaan, staf, dan lainnya. Skema ini meniru model bisnis penyewaan DVD secara realistis, memungkinkan pengguna untuk mempelajari pengelolaan data bisnis kompleks melalui MySQL.</p>
                </div>
                <div class="feature-card">
                    <h2>Relasi Data yang Realistis</h2>
                    <p>Setiap tabel dalam Sakila saling berelasi dengan cara yang realistis. Misalnya, tabel penyewaan berelasi dengan tabel film, pelanggan, dan staf untuk merepresentasikan proses penyewaan DVD yang sebenarnya. Relasi ini dibangun dengan integritas referensial melalui foreign key.</p>
                </div>
                <div class="feature-card">
                    <h2>Operasi SQL Lanjutan</h2>
                    <p>Sakila mendukung berbagai operasi SQL, mulai dari query dasar hingga penggunaan join, subquery, agregasi, dan fungsi-fungsi lanjutan. Ini membantu pengguna dalam mempelajari berbagai aspek pengelolaan database, mulai dari query seleksi sederhana hingga pengoptimalan kompleks.</p>
                </div>
                <div class="feature-card">
                    <h2>Kueri Contoh dan Dokumentasi</h2>
                    <p>Selain skema yang lengkap, Sakila juga dilengkapi dengan dokumentasi menyeluruh dan kueri-kueri contoh yang dirancang untuk mengilustrasikan berbagai skenario pengelolaan data. Pengguna dapat melihat bagaimana data dalam database ini diproses dan dianalisis secara efisien.</p>
                </div>
            </div>

            <div class="team-section">
                <h2>Tim Pengembang</h2>
                <div class="team-grid">
                    <div class="team-member">
                        <img src="{{ asset('adminkba/assets/images/mysql_logo.png')}}" alt="Tim MySQL">
                        <h3>Tim MySQL</h3>
                        <p>Pengembang Utama Database Sakila</p>
                    </div>
                    <div class="team-member">
                        <img src="{{ asset('adminkba/assets/images/oracle_logo.png')}}" alt="Tim Oracle">
                        <h3>Oracle Corporation</h3>
                        <p>Pemelihara dan Pengelola Sakila</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 Database Sakila. Hak cipta dilindungi undang-undang oleh MySQL dan Oracle Corporation.</p>
    </footer>

</body>
</html>