<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchema extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->timestamps();
        });

        Schema::create('seller', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->integer("type");
            $table->timestamps();
        });

        Schema::create('transaction', function (Blueprint $table) {
            $table->id();
            $table->integer("type");
            $table->dateTime("date");
            $table->integer("product_id");
            $table->string("value");
            $table->integer("seller_id");
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
        Schema::dropIfExists('product');
        Schema::dropIfExists('seller');
        Schema::dropIfExists('transaction');
    }
}
