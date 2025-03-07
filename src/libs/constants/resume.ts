import SOCIAL from './social'

import { Experience } from 'taufikcrisnawan'

const IMG_URL = 'https://ik.imagekit.io/taufik/certificate'

export const HEADLINE = {
  name: 'Taufik Crisnawan Santoso'
}

export const LINKS: typeof SOCIAL = [
  ...SOCIAL.filter((s) => s.title !== 'Instagram'),
  {
    href: 'https://taufikcrisnawan.dev',
    title: 'Website'
  },
  {
    href: 'https://taufikcrisnawan.dev/certificate',
    title: 'Certificate'
  }
]

export const SKILLS = [
  `Pemantauan Jaringan Internet dan Pemecahan Masalah`,
  `Mengelola dan mengkonfigurasi perangkat jaringan seperti Mikrotik, Cisco, dan berbagai perangkat jaringan lainnya`,
  `Pemahaman tentang protokol jaringan utama seperti TCP/IP, Routing, BGP, dan OSPF`,
  `Pemahaman tentang teknologi jaringan seperti VLAN, VPN, dan Wireless`
]

export const KEY_SKILLS = [
  `Sebagai seorang yang profesional saya berusaha untuk berpikir desain, terampil dalam berpikir kritis & pemecahan masalah.`,
  `Sangat mudah beradaptasi dan berkembang dalam lingkungan yang berorientasi pada tim maupun individu.`,
  `Saya juga dikenal karena kreativitas dan kemampuan saya untuk mendekati tugas dan tantangan dengan pola pikir yang inovatif.`
]

export const EXPERIENCE: Experience[] = [
  {
    companyName: 'PT Era Awan Digital (eranyacloud)',
    role: 'Cloud Support (L1)',
    period: {
      start: 'Desember 2024',
      end: 'Sekarang'
    },
    lists: []
  },
  {
    companyName: 'PT Eka Mas Republik (MyRepublic)',
    role: 'Network Operating Center Staff',
    period: {
      start: 'Januari 2024',
      end: 'November 2024'
    },
    lists: []
  },
  {
    companyName: 'PT Step Point Indonesia',
    role: 'Helper Staff',
    period: {
      start: 'November 2023',
      end: 'Januari 2024'
    },
    lists: [
      // `Melakukan survei di lokasi pemasangan untuk menentukan rute kabel fiber optik.`,
      // `Melakukan instalasi WiFi menggunakan kabel fiber optik dari FAT (Fiber Access Terminal) hingga ke titik pemasangan di rumah pelanggan.`,
      // `Memastikan pemasangan kabel fiber optik sesuai dengan standar kualitas dan keamanan.`,
      // `Memasang dan konfigurasi perangkat ONT (Optical Network Terminal) di rumah pelanggan.`,
      // `Melakukan uji coba koneksi dan pengukuran kecepatan koneksi internet.`,
      // `Memberikan pelatihan kepada pelanggan terkait penggunaan perangkat dan pemahaman tentang layanan yang disediakan.`,
      // `Membuat dokumentasi mengenai detail pemasangan, konfigurasi, dan pengukuran.`,
      // `Berkoordinasi dengan tim lain, seperti tim maintenance service, untuk memastikan integrasi yang lancar dan pemecahan masalah yang efisien.`,
      // `Menyusun laporan mengenai pekerjaan yang telah dilakukan.`
    ]
  },
  {
    companyName: 'PT Sintesa Sinergi Nusantara',
    role: 'Intership Network Operation Center',
    period: {
      start: 'Juni 2023',
      end: 'November 2023'
    },
    lists: [
      // `Melakukan instalasi klien FTTH (Fiber To The Home) dengan perangkat ONT (Optical Network Terminal), konfigurasi OLT (Optical line termination), PPPoe Secret.`,
      // `Mendeteksi, menganalisis, dan menangani gangguan jaringan atau masalah kinerja.`,
      // `Berkomunikasi dengan pelanggan dan penyedia layanan untuk memberikan informasi tentang gangguan jaringan dan status pemulihan.`,
      // `Membuat laporan rutin tentang kinerja jaringan, insiden, dan pemulihan. Menyimpan catatan dokumentasi tentang semua masalah dan tindakan yang telah diambil.`,
      // `Membuat trouble ticket pada tim Maintenance untuk menangani gangguan jaringan atau perangkat pada klien.`
    ]
  }
]

type Education = Array<{
  school: string
  period: { start: string; end: string }
  paragraphs: string[]
  list?: {
    title: string
    listItem: string[]
  }
}>

export const EDUCATION: Education = [
  {
    school: 'Universitas Terbuka',
    period: {
      start: 'September, 2024',
      end: 'Sekarang'
    },
    paragraphs: ['Semester 1, Sistem Informasi']
  },
  {
    school: 'SMK Negeri 2 Depok Sleman',
    period: {
      start: 'Juni, 2020',
      end: 'Mei 2024'
    },
    paragraphs: ['Sistem Informatika Jaringan dan Aplikasi'],
    list: {
      title: 'Penghargaan:',
      listItem: [
        'Medallion Of Excellence National Skils Competition (IT Network System Administrator)',
        'Juara 1 Lomba Kompetensi Siswa Tingkat Provinsi D.I. Yogyakarta (IT Network System Administrator)'
      ]
    }
  },
  {
    school: 'SMP Negeri 5 Depok Sleman',
    period: {
      start: 'September, 2017',
      end: 'Mei, 2020'
    },
    paragraphs: []
  }
]

export const SUMMARY = [
  `Seorang Network Engineer, Mahasiswa Universitas Terbuka Prodi Sistem Informasi. Memiliki pengalaman dalam monitoring dan pemeliharaan infrastruktur jaringan, termasuk troubleshooting, pemecahan masalah teknis, serta memiliki pengetahuan tentang protokol jaringan utama seperti TCP/IP, Routing, BGP, dan OSPF. Mempelajari, mencari tahu dan mengeksplorasi tentang teknologi baru serta praktik, tetap fokus pada tanggungjawab dan memberikan hasil semaksimal mungkin.`
]

export const HONOR = [
  {
    title: 'CCNAv7: Enterprise Networking, Security, and Automation (Cisco).',
    level: 'Diterbitkan Okt 2024',
    href: `${IMG_URL}/taufik-crisnawan-santoso-CCNA-ENSA.png`
  },
  {
    title: 'CCNAv7: Switching, Routing, and Wireless Essentials (Cisco).',
    level: 'Diterbitkan Agu 2024',
    href: `${IMG_URL}/taufik-crisnawan-santoso-CCNA-SRWE.png`
  },
  {
    title: `CCNAv7: Introduction to Networks (Cisco).`,
    level: `Diterbitkan Jul 2024`,
    href: `${IMG_URL}/taufik-crisnawan-santoso-CCNA-ITN.png`
  },
  {
    title: `Fortinet Networking Fundamentals (Fortinet).`,
    level: `Diterbitkan Nov 2023`,
    href: `${IMG_URL}/Course_Completion_Certificate.png`
  },
  {
    title: `Network Addressing and Basic Troubleshooting (Cisco).`,
    level: `Diterbitkan Okt 2023`,
    href: `${IMG_URL}/Network_Addressing_and_Basic_Troubleshooting.png`
  },
  {
    title: `Networking Basics (Cisco).`,
    level: `Diterbitkan Okt 2023`,
    href: `${IMG_URL}/Networking_Basics.jpg`
  },
  {
    title: 'Medallion For Excellence Lomba Kompetensi Siswa SMK (ITNSA)',
    level: 'Tingkat Nasional 2023 bidang IT Network System Administrator',
    href: `${IMG_URL}/LKS%20Nasional%20MoE.png`
  },
  {
    title: 'Finalis Lomba Kompetensi Siswa SMK (ITNSA)',
    level: 'Tingkat Nasional 2023 bidang IT Network System Administrator',
    href: `${IMG_URL}/LKS%20Nasional%202023.png`
  },
  {
    title: `Cisco Certified Support Technician - Networking (CCST).`,
    level: `Diterbitkan Okt 2023`,
    href: `${IMG_URL}/CCST-Networking.png`
  },
  {
    title: 'Juara 1 Lomba Kompetensi Siswa SMK (ITNSA)',
    level: 'Tingkat Provinsi D.I. Yogyakarta 2023 bidang IT Network System Administrator',
    href: `${IMG_URL}/LKS-ITNSA-DIY.png`
  },
  {
    title: `Mikrotik Certified Network Associate (MTCNA).`,
    level: `Diterbitkan Mar 2023 kadaluarsa Mar 2026`,
    href: `${IMG_URL}/MTCNA.png`
  }
  // {
  //   title: 'Bootcamp Mikrotik (MTCNA & MTCRE) (ID Networkers).',
  //   level: 'Diterbitkan Mar 2023',
  //   href: `${IMG_URL}/Bootcamp_Mikrotik__MTCNA___MTCRE_.png`
  // },
  // {
  //   title: `Belajar Dasar-Dasar DevOps (Dicoding).`,
  //   level: `Diterbitkan Jan 2023 kadaluarsa Jan 2026`,
  //   href: `${IMG_URL}/Belajar_Dasar-Dasar_DevOps.png`
  // },
  // {
  //   title: 'Belajar Jaringan Komputer Untuk Pemula (Dicoding).',
  //   level: 'Diterbitkan Jan 2023 kadaluarsa Jan 2026',
  //   href: `${IMG_URL}/Belajar_Jaringan_Komputer_Untuk_Pemula.png`
  // },
  // {
  //   title: 'Mikrotik Dasar (ID Networkers).',
  //   level: 'Diterbitkan Jan 2023 kadaluarsa Jan 2026',
  //   href: `${IMG_URL}/Mikrotik_Dasar_-_ID_Networkers.png`
  // },
  // {
  //   title: 'Cisco Dasar (ID Networkers).',
  //   level: 'Diterbitkan Jan 2023 kadaluarsa Nov 2026',
  //   href: `${IMG_URL}/Cisco_Dasar-ID-Networkers.png`
  // },
  // {
  //   title: 'Jaringan Komputer Dasar (ID Networkers).',
  //   level: 'Diterbitkan Jan 2023 kadaluarsa Nov 2026',
  //   href: `${IMG_URL}/Jaringan_Komputer_Dasar-ID-Networkers.png`
  // }
]

// export const LANGUAGES = [
//   {
//     title: 'Indonesia',
//     level: 'Warga Asli, Fasih'
//   },
//   {
//     title: `Jawa`,
//     level: `Fasih`
//   },
//   {
//     title: 'Inggris',
//     level: 'Pemula'
//   }
// ]

export const CONTACT = [
  {
    title: `E-mail`,
    level: `mail@taufikcrisnawan.dev`
  },
  {
    title: 'Website',
    level: 'taufikcrisnawan.dev'
  },
  {
    title: `Sosial Media`,
    level: `links.taufikcrisnawan.dev`
  }
]
