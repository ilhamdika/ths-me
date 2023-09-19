<?php

namespace Database\Seeders;

use App\Models\About;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutMeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $aboutMe = [
            [
                'name' => 'Ilham Dika Permana',
                'profession' => 'Web Developer',
                'description' => 'lorem ipsum dolor sit amet c',
                'image' => 'https://via.placeholder.com/150',
                'email' => 'ilhamdika@gmail.com',
                'instagram' => 'https://instagram.com/ilhamdika',
                'github' => 'https://instagram.com/ilhamdika',
                'linkedin' => 'https://instagram.com/ilhamdika',
            ]
        ];

        About::insert($aboutMe);
    }
}
