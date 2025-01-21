<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_posts', function (Blueprint $table) {
            $table->id();
            $table->string('jobtitle');
            $table->string('jobcategory');
            $table->text('jobdescription');
            $table->date('deadline');
            $table->text('requirements');
            $table->string('jobdurationtype');
            $table->string('salary');
            $table->string('jobtype');
            $table->integer('views')->default(0);
            $table->integer('status');
            $table->unsignedBigInteger('company_id');
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('company_posts');
    }
};
